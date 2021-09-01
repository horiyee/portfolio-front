import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { announcementsState } from '../recoil/atoms/announcements';
import { Announcement } from '../types/announcement';

export const useSetAnnouncements = (state: Announcement[]) => {
  const [announcements, setAnnouncements] = useRecoilState(announcementsState);

  useEffect(() => {
    if (announcements.length === 0) {
      setAnnouncements(state);
    }
  }, [state]);
};
