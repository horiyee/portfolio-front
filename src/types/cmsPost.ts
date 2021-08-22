import { Category } from './category';
import { Thumbnail } from './thumbnail';

export type CmsPost = {
  id: string;
  title: string;
  body: string;
  thumbnail: Thumbnail;
  category: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
