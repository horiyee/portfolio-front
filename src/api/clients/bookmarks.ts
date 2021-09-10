import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import {
  BookmarkApiRequest,
  FetchBookmarksApiResponse,
} from '../../types/api/bookmarks';
import { Bookmark } from '../../types/bookmark';

export const createBookmarkApiClient = async (bookmark: BookmarkApiRequest) => {
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

export const updateBookmarkApiClient = async (
  id: number,
  bookmark: BookmarkApiRequest,
) => {
  await axios.put(getApiEndpoint(`${apiPaths.v1.bookmarks}/${id}`), bookmark);
};

export const deleteBookmarkApiClient = async (id: number) => {
  await axios.delete(getApiEndpoint(`${apiPaths.v1.bookmarks}/${id}`));
};
