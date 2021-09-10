import { Category } from '../category';

export type FetchCategoriesApiResponse = {
  categories: Category[];
};

export type CreateCategoryApiRequest = {
  name: string;
};

export type UpdateCategoryApiRequest = {
  name: string;
};
