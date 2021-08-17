import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { apiHealthState } from '../recoil/atoms/apiHealth';
import { ApiHealth } from '../types/apiHealth';

export const setApiHealth = (apiHealth: ApiHealth) => {
  const setApiHealthState = useSetRecoilState(apiHealthState);

  useEffect(() => {
    setApiHealthState(apiHealth);
  }, [apiHealth]);
};
