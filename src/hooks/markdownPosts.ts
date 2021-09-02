import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { markdownPostsState } from '../recoil/atoms/markdownPosts';
import { MarkdownPost } from '../types/markdownPost';

export const useSetMarkdownPosts = (state: MarkdownPost[]) => {
  const [markdownPosts, setMarkdownPosts] = useRecoilState(markdownPostsState);

  useEffect(() => {
    if (state) {
      if (markdownPosts.length === 0 && state.length !== 0) {
        setMarkdownPosts(state);
      }
    }
  }, [state]);
};
