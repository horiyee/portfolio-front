import React from 'react';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AdminTemplate from '../../common/AdminTemplate';

const AdminMarkdownPostsIndexTemplate: React.VFC = () => {
  return (
    <AdminTemplate>
      <AdminPageTitle>マークダウン記事一覧</AdminPageTitle>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsIndexTemplate;
