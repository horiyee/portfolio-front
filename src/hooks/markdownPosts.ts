import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  createMarkdownPostApiClient,
  deleteMarkdownPostApiClient,
  updateMarkdownPostApiClient,
} from '../api/clients/markdownPosts';
import { paths } from '../config/paths';
import { markdownPostsState } from '../recoil/atoms/markdownPosts';
import { MarkdownPostApiRequest } from '../types/api/markdownPosts';
import { MarkdownPost } from '../types/markdownPost';

export const useSetMarkdownPosts = (state: MarkdownPost[]) => {
  const [markdownPosts, setMarkdownPosts] = useRecoilState(markdownPostsState);

  useEffect(() => {
    if (state) {
      if (markdownPosts.length === 0 && state.length !== 0) {
        setMarkdownPosts(state);
      }
    }
  }, [state]);
};

export const useMarkdownPostAdminApiClients = () => {
  const router = useRouter();

  const postMarkdownPost = useCallback(
    async (title: string, body: string, categoryId: string, publish) => {
      if (title === '') {
        alert('タイトルを入力してください。');
        return;
      }

      const parsedCategoryId = Number(categoryId);
      if (isNaN(parsedCategoryId) || parsedCategoryId === 0) {
        alert('カテゴリIDが不正です。');
        return;
      }

      const confirm = window.confirm(`記事を投稿しますか？`);

      if (confirm) {
        const markdownPost: MarkdownPostApiRequest = {
          title,
          body,
          categoryId: parsedCategoryId,
          publish,
        };

        try {
          await createMarkdownPostApiClient(markdownPost);
          alert('投稿が完了しました。');
          router.push(`${paths.admin.markdownPosts.index}`);
        } catch {
          alert('投稿に失敗しました。');
        }
      }
    },
    [],
  );

  const updateMarkdownPost = useCallback(
    async (
      id: number,
      title: string,
      body: string,
      categoryId: string,
      publish: boolean,
    ) => {
      if (title === '') {
        alert('タイトルを入力してください。');
        return;
      }

      const parsedCategoryId = Number(categoryId);
      if (isNaN(parsedCategoryId) || parsedCategoryId === 0) {
        alert('カテゴリIDが不正です。');
        return;
      }

      const confirm = window.confirm(`記事を更新しますか？`);

      if (confirm) {
        const markdownPost: MarkdownPostApiRequest = {
          title,
          body,
          categoryId: parsedCategoryId,
          publish,
        };

        try {
          await updateMarkdownPostApiClient(id, markdownPost);
          alert('更新が完了しました。');
          router.push(paths.admin.markdownPosts.index);
        } catch (e) {
          console.error(e);
          alert('更新に失敗しました。');
        }
      }
    },
    [],
  );

  const deleteMarkdownPost = useCallback(async (id: number, title: string) => {
    const confirm = window.confirm(`記事『${title}』を削除しますか？`);

    if (confirm) {
      try {
        await deleteMarkdownPostApiClient(id);
        alert('記事を削除しました。');
        router.push(paths.admin.markdownPosts.index);
      } catch (e) {
        console.error(e);
        alert('削除に失敗しました。');
      }
    }
  }, []);

  return { postMarkdownPost, updateMarkdownPost, deleteMarkdownPost };
};
