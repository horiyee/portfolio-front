import { atom } from 'recoil';
import { recoilKeys } from '..';
import { MarkdownPost } from '../../types/markdownPost';

export const markdownPostsState = atom<MarkdownPost[]>({
  key: recoilKeys.atoms.MARKDOWN_POSTS,
  default: [],
});
