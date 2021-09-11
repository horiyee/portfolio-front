import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchCategoriesApiClient } from '../../../api/clients/categories';
import AdminBookmarkNewTemplate from '../../../components/templates/admin/bookmarks/AdminBookmarkNewTemplate';
import { Category } from '../../../types/category';

type ServerSideProps = {
  categories: Category[];
};

const AdminBookmarkNewPage: NextPage<ServerSideProps> = ({ categories }) => {
  return <AdminBookmarkNewTemplate categories={categories} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async () => {
    try {
      const res = await fetchCategoriesApiClient();

      const props: ServerSideProps = {
        categories: res.categories,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        categories: [],
      };

      return { props };
    }
  };

export default AdminBookmarkNewPage;
