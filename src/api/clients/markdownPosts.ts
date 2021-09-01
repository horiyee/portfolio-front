import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { CreateMarkdownPostApiRequest } from '../../types/api/markdownPosts';

export const createMarkdownPostApiClient = async (
  markdownPost: CreateMarkdownPostApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.markdownPosts),
    markdownPost,
  );

  return res.data;
};
