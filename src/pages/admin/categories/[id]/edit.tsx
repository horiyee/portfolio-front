import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchCategoryApiClient } from '../../../../api/clients/categories';
import AdminCategoryEditTemplate from '../../../../components/templates/admin/categories/AdminCategoryEditTemplate';
import { paths } from '../../../../config/paths';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { Category } from '../../../../types/category';

type ServerSideProps = {
  category: Category | null;
};

const AdminCategoryEditPage: NextPage<ServerSideProps> = ({ category }) => {
  const router = useRouter();

  if (category === null) {
    router.push(paths.notFound);
    return null;
  }

  return <AdminCategoryEditTemplate category={category} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async context => {
    const id = context.params.id;

    try {
      if (typeof id !== `string`) {
        throw new QueryParameterDuplicateError();
      }

      const categoryId = Number(id);
      if (isNaN(categoryId)) {
        throw new QueryParameterNaNError();
      }

      const res = await fetchCategoryApiClient(categoryId);

      const props: ServerSideProps = {
        category: res,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        category: null,
      };

      return { props };
    }
  };

export default AdminCategoryEditPage;
