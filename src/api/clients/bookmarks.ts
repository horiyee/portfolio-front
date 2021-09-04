import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import {
  CreateBookmarkApiRequest,
  FetchBookmarksApiResponse,
} from '../../types/api/bookmarks';
import { Bookmark } from '../../types/bookmark';

export const createBookmarkApiClient = async (
  bookmark: CreateBookmarkApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.bookmarks),
    bookmark,
  );

  return res.data;
};

export const fetchBookmarksApiClient = async () => {
  const res = await axios.get<FetchBookmarksApiResponse>(
    getApiEndpoint(apiPaths.v1.bookmarks),
  );

  return res.data;
};

export const fetchBookmarkApiClient = async (id: number) => {
  const res = await axios.get<Bookmark>(
    getApiEndpoint(`${apiPaths.v1.bookmarks}/${id}`),
  );

  return res.data;
};
