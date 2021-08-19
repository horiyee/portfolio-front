import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cmsPostsState } from '../recoil/atoms/cmsPosts';
import { CmsPost } from '../types/cmsPost';

export const useSetCmsPosts = (state: CmsPost[]) => {
  const [cmsPosts, setCmsPosts] = useRecoilState(cmsPostsState);

  useEffect(() => {
    if (cmsPosts.length === 0) {
      setCmsPosts(state);
    }
  }, [state]);
};
