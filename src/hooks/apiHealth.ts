import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { apiHealthState } from '../recoil/atoms/apiHealth';
import { ApiHealth } from '../types/apiHealth';

export const useSetApiHealth = (state: ApiHealth) => {
  const [apiHealth, setApiHealth] = useRecoilState(apiHealthState);

  useEffect(() => {
    if (apiHealth === null) {
      setApiHealth(state);
    }
  }, [state]);
};
