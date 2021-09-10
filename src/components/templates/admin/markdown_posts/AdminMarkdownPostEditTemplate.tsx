import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useGetCategorySelectorOptions } from '../../../../hooks/categories';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { Category } from '../../../../types/category';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledSelector from '../../../molecules/admin/AdminLabeledSelector';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPost: MarkdownPost;
  categories: Category[];
};

const AdminMarkdownPostEditTemplate: React.VFC<Props> = ({
  markdownPost,
  categories,
}) => {
  const router = useRouter();
  const getCategorySelectorOptions = useGetCategorySelectorOptions();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  const [title, setTitle] = useState(markdownPost.title);
  const [body, setBody] = useState(markdownPost.body);
  const [categoryId, setCategoryId] = useState(String(markdownPost.categoryId));

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事編集</AdminPageTitle>

      <AdminForm>
        <AdminFormItemWrapper>
          <AdminLabeledSelector
            label="カテゴリ"
            value={categoryId}
            setValue={setCategoryId}
            options={getCategorySelectorOptions(categories)}
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
          color="red"
          icon={<ClearIcon />}
          onClick={() => router.push(paths.admin.markdownPosts.index)}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          color="red"
          onClick={() =>
            markdownPostAdminApiClients.deleteMarkdownPost(
              markdownPost.id,
              markdownPost.title,
            )
          }
          icon={<DeleteIcon />}
        >
          削除
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            markdownPostAdminApiClients.updateMarkdownPost(
              markdownPost.id,
              title,
              body,
              categoryId,
            )
          }
          icon={<SendIcon />}
        >
          更新
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostEditTemplate;
