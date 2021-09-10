import { Bookmark } from '../bookmark';

export type FetchBookmarksApiResponse = {
  bookmarks: Bookmark[];
};

export type BookmarkApiRequest = {
  url: string;
  description: string;
};
