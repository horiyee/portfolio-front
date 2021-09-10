import { ExternalPost } from '../externalPost';

export type FetchExternalPostsApiResponse = {
  externalPosts: ExternalPost[];
};

export type ExternalPostApiRequest = {
  title: string;
  url: string;
  thumbnailUrl: string;
  categoryId: number;
  publishedAt: Date;
};
