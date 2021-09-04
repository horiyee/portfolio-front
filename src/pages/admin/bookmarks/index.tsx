import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { fetchBookmarksApiClient } from '../../../api/clients/bookmarks';
import AdminBookmarksIndexTemplate from '../../../components/templates/admin/bookmarks/AdminBookmarksIndexTemplate';
import { Bookmark } from '../../../types/bookmark';

type ServerSideProps = {
  bookmarks: Bookmark[] | null;
};

const AdminBookmarksIndexPage: NextPage<ServerSideProps> = ({ bookmarks }) => {
  return <AdminBookmarksIndexTemplate bookmarks={bookmarks} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async () => {
    try {
      const res = await fetchBookmarksApiClient();

      const props: ServerSideProps = {
        bookmarks: res.bookmarks,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        bookmarks: [],
      };

      return { props };
    }
  };

export default AdminBookmarksIndexPage;
