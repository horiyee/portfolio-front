import React from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import AdminCancelButton from '../../../atoms/admin/AdminCancelButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import AddIcon from '../../../atoms/icons/AddIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarkNewTemplate: React.VFC = () => {
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminCancelButton pathToBack={paths.admin.bookmarks.index}>
          やめる
        </AdminCancelButton>
        <BasicButton
          icon={<AddIcon />}
          onClick={() => bookmarkAdminApiClients.post('', '')}
        >
          ブックマークを追加
        </BasicButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
