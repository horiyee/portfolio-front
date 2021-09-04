import axios from 'axios';
import { getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { FetchExternalPostsApiResponse } from '../../types/api/externalPosts';

export const fetchExternalPostsApiClient = async () => {
  const res = await axios.get<FetchExternalPostsApiResponse>(
    getApiEndpoint(`${apiPaths.v1.externalPosts}`),
  );

  return res.data;
};
