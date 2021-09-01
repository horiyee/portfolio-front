import axios from 'axios';
import { cmsRequestHeaders, getCmsEndpoint } from '../../config';
import { cmsPaths } from '../../config/apiPaths';
import { FetchQiitaPostsApiResponse } from '../../types/api/qiitaPosts';

export const fetchQiitaPostsApiClient = async () => {
  const res = await axios.get<FetchQiitaPostsApiResponse>(
    getCmsEndpoint(cmsPaths.qiitaPosts),
    { headers: cmsRequestHeaders },
  );

  return res.data;
};
