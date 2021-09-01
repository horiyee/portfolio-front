import { MarkdownPost } from '../markdownPost';

export type FetchMarkdownPostsApiResponse = {
  markdownPosts: MarkdownPost[];
};

export type CreateMarkdownPostApiRequest = {
  title: string;
  body: string;
};

export type UpdateMarkdownPostApiRequest = {
  title: string;
  body: string;
};
