import { ExternalPost } from '../externalPost';

export type FetchExternalPostsApiResponse = {
  externalPosts: ExternalPost[];
};

export type CreateExternalPostApiRequest = {
  title: string;
  url: string;
  thumbnailUrl: string;
  categoryId: number;
  publishedAt: Date;
};

export type UpdateExternalPostApiRequest = {
  title: string;
  url: string;
  thumbnailUrl: string;
  categoryId: number;
  publishedAt: Date;
};
