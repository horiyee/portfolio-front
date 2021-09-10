import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import {
  CreateExternalPostApiRequest,
  FetchExternalPostsApiResponse,
  UpdateExternalPostApiRequest,
} from '../../types/api/externalPosts';
import { ExternalPost } from '../../types/externalPost';

export const createExternalPostApiClient = async (
  externalPost: CreateExternalPostApiRequest,
) => {
  const res = await axios.post<number>(
    getApiEndpoint(apiPaths.v1.externalPosts),
    externalPost,
  );

  return res.data;
};

export const fetchExternalPostApiClient = async (id: number) => {
  const res = await axios.get<ExternalPost>(
    getApiEndpoint(`${apiPaths.v1.externalPosts}/${id}`),
  );

  return res.data;
};

export const fetchExternalPostsApiClient = async () => {
  const res = await axios.get<FetchExternalPostsApiResponse>(
    getApiEndpoint(apiPaths.v1.externalPosts),
  );

  return res.data;
};

export const updateExternalPostApiClient = async (
  id: number,
  externalPost: UpdateExternalPostApiRequest,
) => {
  await axios.put(
    getApiEndpoint(`${apiPaths.v1.externalPosts}/${id}`),
    externalPost,
  );
};
