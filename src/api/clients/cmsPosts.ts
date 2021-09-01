import axios from 'axios';
import { cmsRequestHeaders, getCmsEndpoint } from '../../config';
import { cmsPaths } from '../../config/apiPaths';
import { FetchCmsPostsApiResponse } from '../../types/api/cmsPosts';

export const fetchCmsPostsApiClient = async () => {
  const res = await axios.get<FetchCmsPostsApiResponse>(
    getCmsEndpoint(cmsPaths.posts),
    {
      headers: cmsRequestHeaders,
    },
  );

  return res.data;
};
