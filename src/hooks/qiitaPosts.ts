import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { qiitaPostsState } from '../recoil/atoms/qiitaPosts';
import { QiitaPost } from '../types/qiitaPost';

export const useSetQiitaPosts = (state: QiitaPost[]) => {
  const [qiitaPosts, setQiitaPosts] = useRecoilState(qiitaPostsState);

  useEffect(() => {
    if (qiitaPosts.length === 0) {
      setQiitaPosts(state);
    }
  }, [state]);
};
