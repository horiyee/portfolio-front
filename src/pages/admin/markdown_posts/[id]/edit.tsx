import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchMarkdownPostApiClient } from '../../../../api/clients/markdownPosts';
import AdminMarkdownPostEditTemplate from '../../../../components/templates/admin/markdown_posts/AdminMarkdownPostEditTemplate';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { MarkdownPost } from '../../../../types/markdownPost';

type ServerSideProps = {
  markdownPost: MarkdownPost | null;
};

const AdminMarkdownPostEditPage: NextPage<ServerSideProps> = ({
  markdownPost,
}) => {
  return <AdminMarkdownPostEditTemplate markdownPost={markdownPost} />;
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
      const res = await fetchMarkdownPostApiClient(markdownPostId);

      const props: ServerSideProps = {
        markdownPost: res,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        markdownPost: null,
      };

      return { props };
    }
  };

export default AdminMarkdownPostEditPage;
