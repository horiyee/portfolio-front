import { useCallback } from 'react';

const res = {
  data: {
    status: 'OK',
    message: 'Working normally',
  },
};

export const apiClient = async () => {
  return res.data;
};

export const apiClientMultipleCaller = async (
  trial: number,
  outputLogs: boolean,
) => {
  for (let i = 0; i < trial; i++) {
    await apiClient()
      .then(res => {
        if (outputLogs) {
          console.log(res);
        }
      })
      .catch(console.error);
  }
};

export const useMemorizedApiClientMultipleCaller = () => {
  const memorizedApiClient = useCallback(async () => {
    return res.data;
  }, []);

  const memorizedApiClientMultipleCaller = useCallback(
    async (trial: number, outputLogs: boolean) => {
      for (let i = 0; i < trial; i++) {
        await memorizedApiClient()
          .then(res => {
            if (outputLogs) {
              console.log(res);
            }
          })
          .catch(console.error);
      }
    },
    [],
  );

  return memorizedApiClientMultipleCaller;
};
