import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import {
  FetchMarkdownPostsApiResponse,
  MarkdownPostApiRequest,
} from '../../types/api/markdownPosts';
import { MarkdownPost } from '../../types/markdownPost';

export const createMarkdownPostApiClient = async (
  markdownPost: MarkdownPostApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.markdownPosts),
    markdownPost,
  );

  return res.data;
};

export const fetchMarkdownPostsApiClient = async () => {
  const res = await axios.get<FetchMarkdownPostsApiResponse>(
    getApiEndpoint(apiPaths.v1.markdownPosts),
  );

  return res.data;
};

export const fetchMarkdownPostApiClient = async (id: number) => {
  const res = await axios.get<MarkdownPost>(
    getApiEndpoint(`${apiPaths.v1.markdownPosts}/${id}`),
  );

  return res.data;
};

export const updateMarkdownPostApiClient = async (
  id: number,
  markdownPost: MarkdownPostApiRequest,
) => {
  await axios.put(
    getApiEndpoint(`${apiPaths.v1.markdownPosts}/${id}`),
    markdownPost,
  );
};

export const deleteMarkdownPostApiClient = async (id: number) => {
  await axios.delete(getApiEndpoint(`${apiPaths.v1.markdownPosts}/${id}`));
};
