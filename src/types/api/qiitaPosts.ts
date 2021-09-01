import { QiitaPost } from '../qiitaPost';

export type FetchQiitaPostsApiResponse = {
  contents: QiitaPost[];
  totalCount: number;
  offset: number;
  limit: number;
};
