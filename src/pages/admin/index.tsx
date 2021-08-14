import { NextPage } from 'next';
import React from 'react';
import AdminTemplate from '../../components/templates/common/AdminTemplate';

const AdminIndexPage: NextPage = () => {
  return (
    <AdminTemplate>
      <h1>Admin Page</h1>
    </AdminTemplate>
  );
};

export default AdminIndexPage;
