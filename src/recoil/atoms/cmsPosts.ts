import { atom } from 'recoil';
import { recoilKeys } from '..';
import { CmsPost } from '../../types/cmsPost';

export const cmsPostsState = atom<CmsPost[]>({
  key: recoilKeys.atoms.CMS_POSTS,
  default: [],
});
