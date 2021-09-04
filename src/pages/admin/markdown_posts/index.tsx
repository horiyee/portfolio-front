import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchMarkdownPostsApiClient } from '../../../api/clients/markdownPosts';
import AdminMarkdownPostsIndexTemplate from '../../../components/templates/admin/markdown_posts/AdminMarkdownPostsIndexTemplate';
import { MarkdownPost } from '../../../types/markdownPost';

type ServerSideProps = {
  markdownPosts: MarkdownPost[] | null;
};

const AdminMarkdownPostsIndexPage: NextPage<ServerSideProps> = ({
  markdownPosts,
}) => {
  return <AdminMarkdownPostsIndexTemplate markdownPosts={markdownPosts} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async () => {
    try {
      const res = await fetchMarkdownPostsApiClient();

      const props: ServerSideProps = {
        markdownPosts: res.markdownPosts,
      };

      return { props };
    } catch (e) {
      console.error(e);
      const props: ServerSideProps = {
        markdownPosts: [],
      };

      return { props };
    }
  };

export default AdminMarkdownPostsIndexPage;
