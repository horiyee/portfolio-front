import { Thumbnail } from './thumbnail';

export type BlogPost = {
  id: string;
  title: string;
  thumbnail: Thumbnail;
  body: string;
  createdAt: string;
  updatedAt: string;
};
