import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchExternalPostsApiClient } from '../../../api/clients/externalPosts';
import AdminExternalPostsIndexTemplate from '../../../components/templates/admin/external_posts/AdminExternalPostsIndexTemplate';
import { ExternalPost } from '../../../types/externalPost';

type ServerSideProps = {
  externalPosts: ExternalPost[] | null;
};

const AdminExternalPostsIndexPage: NextPage<ServerSideProps> = ({
  externalPosts,
}) => {
  return <AdminExternalPostsIndexTemplate externalPosts={externalPosts} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async () => {
    try {
      const res = await fetchExternalPostsApiClient();

      const props: ServerSideProps = {
        externalPosts: res.externalPosts,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        externalPosts: [],
      };

      return { props };
    }
  };

export default AdminExternalPostsIndexPage;
