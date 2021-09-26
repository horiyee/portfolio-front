import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { snackbarOptionState } from '../recoil/atoms/snackbarOption';
import { snackbarColors } from '../styles/variables';
import { WebShareData } from '../types';

export const useNavigatorUtilities = () => {
  const setSnackbarOption = useSetRecoilState(snackbarOptionState);

  const copyStringToClipboard = useCallback(async (data: string) => {
    try {
      await navigator.clipboard.writeText(data);
      setSnackbarOption({
        content: 'URLをクリップボードにコピーしました。',
        color: snackbarColors.success,
        position: 'top',
      });
    } catch (e) {
      setSnackbarOption({
        content: 'URLのコピーに失敗しました。もう一度お試しください。',
        color: snackbarColors.error,
        position: 'top',
      });
    }
  }, []);

  const callWebShareApi = useCallback(async (webShareData: WebShareData) => {
    try {
      await navigator.share(webShareData);
    } catch (e) {
      console.error(e);
      if (e.name === 'TypeError') {
        setSnackbarOption({
          content:
            'エラーが発生しました。ご利用のブラウザ・OSが共有に対応していません。',
          color: snackbarColors.error,
          position: 'top',
        });
      } else if (e.name === 'AbortError') {
        return;
      } else {
        setSnackbarOption({
          content: 'エラーが発生しました。もう一度お試しください。',
          color: snackbarColors.error,
          position: 'top',
        });
      }
    }
  }, []);

  return { copyStringToClipboard, callWebShareApi };
};
