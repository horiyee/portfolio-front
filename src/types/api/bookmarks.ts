import { Bookmark } from '../bookmark';

export type FetchBookmarksApiResponse = {
  bookmarks: Bookmark[];
};

export type CreateBookmarkApiRequest = {
  url: string;
  description: string;
};
