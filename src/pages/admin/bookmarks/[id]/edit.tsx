import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchBookmarkApiClient } from '../../../../api/clients/bookmarks';
import AdminBookmarkEditTemplate from '../../../../components/templates/admin/bookmarks/AdminBookmarkEditTemplate';
import { paths } from '../../../../config/paths';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { Bookmark } from '../../../../types/bookmark';

type ServerSideProps = {
  bookmark: Bookmark | null;
};

const AdminBookmarkEditPage: NextPage<ServerSideProps> = ({ bookmark }) => {
  const router = useRouter();

  if (bookmark === null) {
    router.push(paths.notFound);
    return null;
  }

  return <AdminBookmarkEditTemplate bookmark={bookmark} />;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> =
  async context => {
    const id = context.params.id;

    try {
      if (typeof id !== `string`) {
        throw new QueryParameterDuplicateError();
      }

      const bookmarkId = Number(id);
      if (isNaN(bookmarkId)) {
        throw new QueryParameterNaNError();
      }

      const res = await fetchBookmarkApiClient(bookmarkId);

      const props: ServerSideProps = {
        bookmark: res,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        bookmark: null,
      };

      return { props };
    }
  };

export default AdminBookmarkEditPage;
