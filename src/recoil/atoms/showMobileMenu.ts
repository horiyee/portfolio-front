import { atom } from 'recoil';
import { recoilKeys } from '..';

export const showMobileMenuState = atom({
  key: recoilKeys.atoms.SHOW_MOBILE_MENU,
  default: false,
});
