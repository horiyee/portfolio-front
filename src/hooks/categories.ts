import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  createCategoryApiClient,
  deleteCategoryApiClient,
  updateCategoryApiClient,
} from '../api/clients/categories';
import { paths } from '../config/paths';
import { SelectorOption } from '../types';
import { CategoryApiRequest } from '../types/api/categories';
import { Category } from '../types/category';

export const useGetCategorySelectorOptions = () => {
  const getCategorySelectorOptions = useCallback(
    (categories: Category[]): SelectorOption[] => {
      return categories.map(category => ({
        value: String(category.id),
        label: category.name,
      }));
    },
    [],
  );

  return getCategorySelectorOptions;
};

export const useCategoryAdminApiClients = () => {
  const router = useRouter();

  const postCategory = useCallback(async (name: string) => {
    if (name === '') {
      alert('カテゴリ名を入力してください。');
      return;
    }

    const confirm = window.confirm('カテゴリを追加しますか？');

    if (confirm) {
      const category: CategoryApiRequest = {
        name,
      };

      try {
        await createCategoryApiClient(category);
        alert('追加が完了しました。');
        router.push(paths.admin.categories.index);
      } catch (e) {
        console.error(e);
        alert('追加に失敗しました。');
      }
    }
  }, []);

  const updateCategory = useCallback(async (id: number, name: string) => {
    if (name === '') {
      alert('カテゴリ名を入力してください。');
      return;
    }

    const confirm = window.confirm(`カテゴリを更新しますか？`);

    if (confirm) {
      const category: CategoryApiRequest = {
        name,
      };

      try {
        await updateCategoryApiClient(id, category);
        alert('更新が完了しました。');
        router.push(paths.admin.categories.index);
      } catch (e) {
        console.error(e);
        alert('更新に失敗しました。');
      }
    }
  }, []);

  const deleteCategory = useCallback(async (id: number, name: string) => {
    const confirm = window.confirm(`カテゴリ『${name}』を削除しますか？`);

    if (confirm) {
      try {
        await deleteCategoryApiClient(id);
        alert('ブックマークを削除しました。');
        router.push(paths.admin.categories.index);
      } catch (e) {
        console.error(e);
        alert('削除に失敗しました。');
      }
    }
  }, []);

  return { postCategory, updateCategory, deleteCategory };
};
