import { Category } from '../category';

export type FetchCategoriesApiResponse = {
  categories: Category[];
};

export type CategoryApiRequest = {
  name: string;
};
