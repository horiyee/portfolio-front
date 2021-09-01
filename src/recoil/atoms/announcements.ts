import { atom } from 'recoil';
import { recoilKeys } from '..';
import { Announcement } from '../../types/announcement';

export const announcementsState = atom<Announcement[]>({
  key: recoilKeys.atoms.ANNOUNCEMENTS,
  default: [],
});
