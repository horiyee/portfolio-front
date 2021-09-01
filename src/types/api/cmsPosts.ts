import { CmsPost } from '../cmsPost';

export type FetchCmsPostsApiResponse = {
  contents: CmsPost[];
  totalCount: number;
  offset: number;
  limit: number;
};
