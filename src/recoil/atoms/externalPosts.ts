import { atom } from 'recoil';
import { recoilKeys } from '..';
import { ExternalPost } from '../../types/externalPost';

export const externalPostsState = atom<ExternalPost[]>({
  key: recoilKeys.atoms.EXTERNAL_POSTS,
  default: [],
});
