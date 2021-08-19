import axios from 'axios';
import { cmsRequestHeaders, getCmsEndpoint } from '../../config';
import { cmsPaths } from '../../config/apiPaths';
import { FetchCmsPostsApiResponse } from '../../types/api/responses/cmsPosts';

export const fetchCmsPostsApiClient =
  async (): Promise<FetchCmsPostsApiResponse> => {
    const res = await axios.get<FetchCmsPostsApiResponse>(
      getCmsEndpoint(cmsPaths.posts),
      {
        headers: cmsRequestHeaders,
      },
    );

    return res.data;
  };
