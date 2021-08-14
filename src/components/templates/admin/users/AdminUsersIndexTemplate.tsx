import React from 'react';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AdminTemplate from '../../common/AdminTemplate';

const AdminUsersIndexTemplate: React.VFC = () => {
  return (
    <AdminTemplate>
      <AdminPageTitle>Adminユーザー管理</AdminPageTitle>
    </AdminTemplate>
  );
};

export default AdminUsersIndexTemplate;
