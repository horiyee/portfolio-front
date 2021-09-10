import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchCategoriesApiClient } from '../../../../api/clients/categories';
import { fetchExternalPostApiClient } from '../../../../api/clients/externalPosts';
import AdminExternalPostEditTemplate from '../../../../components/templates/admin/external_posts/AdminExternalPostEditTemplate';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { Category } from '../../../../types/category';
import { ExternalPost } from '../../../../types/externalPost';

type ServerSideProps = {
  externalPost: ExternalPost;
  categories: Category[];
};

const AdminExternalPostEditPage: NextPage<ServerSideProps> = ({
  externalPost,
  categories,
}) => {
  return (
    <AdminExternalPostEditTemplate
      externalPost={externalPost}
      categories={categories}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async context => {
    const id = context.query.id;

    try {
      if (typeof id !== `string`) {
        throw new QueryParameterDuplicateError();
      }

      const externalPostId = Number(id);
      if (isNaN(externalPostId)) {
        throw new QueryParameterNaNError();
      }
      const externalPostRes = await fetchExternalPostApiClient(externalPostId);
      const categoriesRes = await fetchCategoriesApiClient();

      const props: ServerSideProps = {
        externalPost: externalPostRes,
        categories: categoriesRes.categories,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        externalPost: null,
        categories: [],
      };

      return { props };
    }
  };

export default AdminExternalPostEditPage;
