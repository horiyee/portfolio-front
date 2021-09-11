import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import { useGetCategorySelectorOptions } from '../../../../hooks/categories';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { Category } from '../../../../types/category';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminLabeledSelector from '../../../molecules/admin/AdminLabeledSelector';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  categories: Category[];
};

const AdminBookmarkNewTemplate: React.VFC<Props> = ({ categories }) => {
  const router = useRouter();
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();
  const getCategorySelectorOptions = useGetCategorySelectorOptions();

  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(String(categories[0].id));

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

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
          <AdminLabeledInput label="URL" value={url} setValue={setUrl} />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminLabeledInput
            label="備考"
            value={description}
            setValue={setDescription}
          />
        </AdminFormItemWrapper>
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.bookmarks.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<SendIcon />}
          onClick={() =>
            bookmarkAdminApiClients.postBookmark(url, description, categoryId)
          }
        >
          登録
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
