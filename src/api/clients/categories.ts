import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import {
  CreateCategoryApiRequest,
  FetchCategoriesApiResponse,
  UpdateCategoryApiRequest,
} from '../../types/api/categories';
import { Category } from '../../types/category';

export const createCategoryApiClient = async (
  category: CreateCategoryApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.categories),
    category,
  );

  return res.data;
};

export const fetchCategoriesApiClient = async () => {
  const res = await axios.get<FetchCategoriesApiResponse>(
    getApiEndpoint(apiPaths.v1.categories),
  );

  return res.data;
};

export const fetchCategoryApiClient = async (id: number) => {
  const res = await axios.get<Category>(
    getApiEndpoint(`${apiPaths.v1.categories}/${id}`),
  );

  return res.data;
};

export const updateCategoryApiClient = async (
  id: number,
  category: UpdateCategoryApiRequest,
) => {
  await axios.put(getApiEndpoint(`${apiPaths.v1.categories}/${id}`), category);
};

export const deleteCategoryApiClient = async (id: number) => {
  await axios.delete(getApiEndpoint(`${apiPaths.v1.categories}/${id}`));
};
