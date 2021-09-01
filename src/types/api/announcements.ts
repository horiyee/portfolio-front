import { Announcement } from '../announcement';

export type FetchAnnouncementsApiResponse = {
  contents: Announcement[];
  totalCount: number;
  offset: number;
  limit: number;
};
