import { MarkdownPost } from '../markdownPost';

export type FetchMarkdownPostsApiResponse = {
  markdownPosts: MarkdownPost[];
};

export type MarkdownPostApiRequest = {
  title: string;
  body: string;
  categoryId: number;
};
