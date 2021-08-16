import { envVariables } from './envVariables';

export const domain = 'k-hori.com';

export const getUrl = (path: string) => {
  if (envVariables.NODE_ENV === 'development') {
    return `http://localhost:8000`;
  }
  return `https://${domain}${path}`;
};
