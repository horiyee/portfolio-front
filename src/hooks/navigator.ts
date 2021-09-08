import { useCallback } from 'react';
import { WebShareData } from '../types';

export const useNavigatorUtilities = () => {
  const copyStringToClipboard = useCallback(async (data: string) => {
    try {
      const res = await navigator.clipboard.writeText(data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const callWebShareApi = useCallback(async (webShareData: WebShareData) => {
    try {
      await navigator.share(webShareData);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { copyStringToClipboard, callWebShareApi };
};
