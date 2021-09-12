import { atom } from 'recoil';
import { recoilKeys } from '..';
import { SnackbarOption } from '../../types';

export const snackbarOptionState = atom<SnackbarOption | null>({
  key: recoilKeys.atoms.SNACKBAR_OPTION,
  default: null,
});
