import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useGetCategorySelectorOptions } from '../../../../hooks/categories';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { Category } from '../../../../types/category';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledSelector from '../../../molecules/admin/AdminLabeledSelector';
import LabeledCheckBox from '../../../molecules/LabeledCheckBox';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  categories: Category[];
};

const AdminMarkdownPostNewTemplate: React.VFC<Props> = ({ categories }) => {
  const router = useRouter();
  const getCategorySelectorOptions = useGetCategorySelectorOptions();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categoryId, setCategoryId] = useState(String(categories[0].id));
  const [publish, setPublish] = useState(false);

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規マークダウン記事</AdminPageTitle>

      <AdminForm>
        <AdminFormItemWrapper>
          <AdminLabeledSelector
            label="カテゴリ"
            value={categoryId}
            setValue={setCategoryId}
            options={getCategorySelectorOptions(categories)}
          />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <LabeledCheckBox
            label="マークダウン記事として公開する"
            checked={publish}
            setChecked={setPublish}
          />
        </AdminFormItemWrapper>

        <AdminMarkdownPostEditor
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
        />
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.markdownPosts.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            markdownPostAdminApiClients.postMarkdownPost(
              title,
              body,
              categoryId,
              publish,
            )
          }
          icon={<SendIcon />}
        >
          投稿
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostNewTemplate;
