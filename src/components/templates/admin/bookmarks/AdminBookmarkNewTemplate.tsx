import router from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarkNewTemplate: React.VFC = () => {
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.bookmarks.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<AddIcon />}
          onClick={() => bookmarkAdminApiClients.postBookmark('', '')}
        >
          ブックマークを追加
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
