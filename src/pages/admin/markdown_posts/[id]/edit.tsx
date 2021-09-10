import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchCategoriesApiClient } from '../../../../api/clients/categories';
import { fetchMarkdownPostApiClient } from '../../../../api/clients/markdownPosts';
import AdminMarkdownPostEditTemplate from '../../../../components/templates/admin/markdown_posts/AdminMarkdownPostEditTemplate';
import { paths } from '../../../../config/paths';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { Category } from '../../../../types/category';
import { MarkdownPost } from '../../../../types/markdownPost';

type ServerSideProps = {
  markdownPost: MarkdownPost | null;
  categories: Category[];
};

const AdminMarkdownPostEditPage: NextPage<ServerSideProps> = ({
  markdownPost,
  categories,
}) => {
  const router = useRouter();

  if (markdownPost === null) {
    router.push(paths.notFound);
    return null;
  }

  return (
    <AdminMarkdownPostEditTemplate
      markdownPost={markdownPost}
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

      const markdownPostId = Number(id);
      if (isNaN(markdownPostId)) {
        throw new QueryParameterNaNError();
      }
      const markdownPostRes = await fetchMarkdownPostApiClient(markdownPostId);
      const categoriesRes = await fetchCategoriesApiClient();

      const props: ServerSideProps = {
        markdownPost: markdownPostRes,
        categories: categoriesRes.categories,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        markdownPost: null,
        categories: [],
      };

      return { props };
    }
  };

export default AdminMarkdownPostEditPage;
