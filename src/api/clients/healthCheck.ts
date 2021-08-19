import axios from 'axios';
import { apiRequestHeaders, getApiEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { ApiHealth } from '../../types/apiHealth';

export const healthCheckApiClient = async (): Promise<ApiHealth> => {
  const res = await axios.get<ApiHealth>(getApiEndpoint(apiPaths.healthCheck), {
    headers: apiRequestHeaders,
  });

  return res.data;
};
