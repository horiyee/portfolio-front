import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchCategoriesApiClient } from '../../../api/clients/categories';
import AdminExternalPostNewTemplate from '../../../components/templates/admin/external_posts/AdminExternalPostNewTemplate';
import { Category } from '../../../types/category';

type ServerSideProps = {
  categories: Category[];
};

const AdminExternalPostNewPage: NextPage<ServerSideProps> = ({
  categories,
}) => {
  return <AdminExternalPostNewTemplate categories={categories} />;
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

export default AdminExternalPostNewPage;
