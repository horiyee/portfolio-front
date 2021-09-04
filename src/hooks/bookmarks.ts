import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  createBookmarkApiClient,
  deleteBookmarkApiClient,
  updateBookmarkApiClient,
} from '../api/clients/bookmarks';
import { paths } from '../config/paths';
import {
  CreateBookmarkApiRequest,
  UpdateBookmarkApiRequest,
} from '../types/api/bookmarks';

export const useBookmarkAdminApiClients = () => {
  const router = useRouter();

  const postBookmark = useCallback(async (url: string, description: string) => {
    if (url === '') {
      alert('URLを入力してください。');
      return;
    }

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

  const updateBookmark = useCallback(
    async (id: number, url: string, description: string) => {
      if (url === '') {
        alert('URLを入力してください。');
        return;
      }

      const confirm = window.confirm(`ブックマークを更新しますか？`);

      if (confirm) {
        const bookmark: UpdateBookmarkApiRequest = {
          url,
          description,
        };

        try {
          await updateBookmarkApiClient(id, bookmark);
          alert('更新が完了しました。');
          router.push(paths.admin.bookmarks.index);
        } catch (e) {
          console.error(e);
          alert('更新に失敗しました。');
        }
      }
    },
    [],
  );

  const deleteBookmark = useCallback(async (id: number) => {
    const confirm = window.confirm('ブックマークを削除しますか？');

    if (confirm) {
      try {
        await deleteBookmarkApiClient(id);
        alert('ブックマークを削除しました。');
        router.push(paths.admin.bookmarks.index);
      } catch (e) {
        console.error(e);
        alert('削除に失敗しました。');
      }
    }
  }, []);

  return {
    postBookmark,
    updateBookmark,
    deleteBookmark,
  };
};