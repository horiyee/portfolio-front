import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { CreateBookmarkApiRequest } from '../../types/api/bookmarks';

export const createBookmarkApiClient = async (
  bookmark: CreateBookmarkApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.bookmarks),
    bookmark,
  );

  return res.data;
};
