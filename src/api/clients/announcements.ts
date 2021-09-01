import axios from 'axios';
import { cmsRequestHeaders, getCmsEndpoint } from '../../config';
import { cmsPaths } from '../../config/apiPaths';
import { FetchAnnouncementsApiResponse } from '../../types/api/announcements';

export const fetchAnnouncementsApiClient = async () => {
  const res = await axios.get<FetchAnnouncementsApiResponse>(
    getCmsEndpoint(cmsPaths.announcements),
    {
      headers: cmsRequestHeaders,
    },
  );

  return res.data;
};
