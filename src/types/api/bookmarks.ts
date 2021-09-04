import { Bookmark } from '../bookmark';

export type FetchBookmarksApiResponse = {
  bookmarks: Bookmark[];
};

export type CreateBookmarkApiRequest = {
  url: string;
  description: string;
};

export type UpdateBookmarkApiRequest = {
  url: string;
  description: string;
};
