import router from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminUsersIndexTemplate: React.VFC = () => {
  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>Adminユーザー管理</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.index)}
          icon={<ArrowBackIcon />}
        >
          戻る
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminUsersIndexTemplate;
