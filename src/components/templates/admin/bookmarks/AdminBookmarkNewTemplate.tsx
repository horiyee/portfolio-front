import React from 'react';
import { paths } from '../../../../config/paths';
import AdminCancelButton from '../../../atoms/admin/AdminCancelButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarkNewTemplate: React.VFC = () => {
  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminCancelButton pathToBack={paths.admin.bookmarks.index}>
          やめる
        </AdminCancelButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
