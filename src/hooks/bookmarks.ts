import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { createBookmarkApiClient } from '../api/clients/bookmarks';
import { paths } from '../config/paths';
import { CreateBookmarkApiRequest } from '../types/api/bookmarks';

export const useBookmarkAdminApiClients = () => {
  const router = useRouter();

  const postBookmark = useCallback(async (url: string, description: string) => {
    const confirm = window.confirm('ブックマークを登録しますか？');

    if (confirm) {
      const bookmark: CreateBookmarkApiRequest = {
        url,
        description,
      };

      try {
        await createBookmarkApiClient(bookmark);
        alert('登録が完了しました。');
        router.push(paths.admin.bookmarks.index);
      } catch (e) {
        console.error(e);
        alert('登録に失敗しました。');
      }
    }
  }, []);

  return {
    postBookmark,
  };
};
