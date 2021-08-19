import { CmsPost } from '../../cmsPosts';

export type FetchCmsPostsApiResponse = {
  contents: CmsPost[];
  totalCount: number;
  offset: number;
  limit: number;
};
