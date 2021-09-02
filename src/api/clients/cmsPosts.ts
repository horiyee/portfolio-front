import axios from 'axios';
import { cmsRequestHeaders, getCmsEndpoint } from '../../config';
import { cmsPaths } from '../../config/apiPaths';
import { FetchCmsPostsApiResponse } from '../../types/api/cmsPosts';
import { CmsPost } from '../../types/cmsPost';

export const fetchCmsPostsApiClient = async () => {
  const res = await axios.get<FetchCmsPostsApiResponse>(
    getCmsEndpoint(cmsPaths.posts),
    {
      headers: cmsRequestHeaders,
    },
  );

  return res.data;
};

export const fetchCmsPostApiClient = async (id: string) => {
  const res = await axios.get<CmsPost>(
    getCmsEndpoint(`${cmsPaths.posts}/${id}`),
    {
      headers: cmsRequestHeaders,
    },
  );

  return res.data;
};
