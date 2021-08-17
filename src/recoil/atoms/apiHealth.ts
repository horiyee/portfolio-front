import { atom } from 'recoil';
import { recoilKeys } from '..';
import { ApiHealth } from '../../types/apiHealth';

export const apiHealthState = atom<ApiHealth | null>({
  key: recoilKeys.atoms.API_HEALTH,
  default: null,
});
