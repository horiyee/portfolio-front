import axios from 'axios';
import { apiRequestHeaders, getEndpoint } from '../../config';
import { apiPaths } from '../../config/apiPaths';
import { HealthCheckApiResponse } from '../../types/api/responses/healthCheck';
import { ApiHealth } from '../../types/apiHealth';

export const healthCheckApiClient = async (): Promise<ApiHealth> => {
  const res: HealthCheckApiResponse = await axios(
    getEndpoint(apiPaths.healthCheck),
    {
      headers: apiRequestHeaders,
    },
  );

  return res.data;
};
