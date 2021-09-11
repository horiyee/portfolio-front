import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { fetchBookmarkApiClient } from '../../../../api/clients/bookmarks';
import { fetchCategoriesApiClient } from '../../../../api/clients/categories';
import AdminBookmarkEditTemplate from '../../../../components/templates/admin/bookmarks/AdminBookmarkEditTemplate';
import { paths } from '../../../../config/paths';
import {
  QueryParameterDuplicateError,
  QueryParameterNaNError,
} from '../../../../types';
import { Bookmark } from '../../../../types/bookmark';
import { Category } from '../../../../types/category';

type ServerSideProps = {
  bookmark: Bookmark | null;
  categories: Category[];
};

const AdminBookmarkEditPage: NextPage<ServerSideProps> = ({
  bookmark,
  categories,
}) => {
  const router = useRouter();

  if (bookmark === null) {
    router.push(paths.notFound);
    return null;
  }

  return (
    <AdminBookmarkEditTemplate bookmark={bookmark} categories={categories} />
  );
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

      const bookmarkRes = await fetchBookmarkApiClient(bookmarkId);
      const categoriesRes = await fetchCategoriesApiClient();

      const props: ServerSideProps = {
        bookmark: bookmarkRes,
        categories: categoriesRes.categories,
      };

      return { props };
    } catch (e) {
      console.error(e);

      const props: ServerSideProps = {
        bookmark: null,
        categories: [],
      };

      return { props };
    }
  };

export default AdminBookmarkEditPage;
