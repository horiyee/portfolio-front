import { Category } from './category';

export type QiitaPost = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
