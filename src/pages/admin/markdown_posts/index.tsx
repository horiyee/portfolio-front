import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchMarkdownPostsApiClient } from '../../../api/clients/markdownPosts';
import AdminMarkdownPostsIndexTemplate from '../../../components/templates/admin/markdown_posts/AdminMarkdownPostsIndexTemplate';
import { MarkdownPost } from '../../../types/markdownPost';

type Props = {
  markdownPosts: MarkdownPost[];
};

const AdminMarkdownPostsIndexPage: NextPage<Props> = ({ markdownPosts }) => {
  return <AdminMarkdownPostsIndexTemplate markdownPosts={markdownPosts} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetchMarkdownPostsApiClient();

    const props: Props = {
      markdownPosts: res.markdownPosts,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: Props = {
      markdownPosts: [],
    };

    return { props };
  }
};

export default AdminMarkdownPostsIndexPage;
