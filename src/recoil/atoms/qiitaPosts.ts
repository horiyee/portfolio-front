import { atom } from 'recoil';
import { recoilKeys } from '..';
import { QiitaPost } from '../../types/qiitaPost';

export const qiitaPostsState = atom<QiitaPost[]>({
  key: recoilKeys.atoms.QIITA_POSTS,
  default: [],
});
