import { Thumbnail } from './thumbnail';

export type CmsPost = {
  id: string;
  title: string;
  body: string;
  thumbnail: Thumbnail;
  category: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
