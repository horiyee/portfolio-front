import { envVariables } from './envVariables';

export const domain = 'k-hori.com';

export const getUrl = (path: string) => {
  if (envVariables.NODE_ENV === 'development') {
    return `http://localhost:8000`;
  }
  return `https://${domain}${path}`;
};

export const getApiEndpoint = (path: string) => {
  return `${envVariables.API_BASE_URL}${path}`;
};

export const getCmsEndpoint = (path: string) => {
  return `${envVariables.CMS_BASE_URL}${path}`;
};

export const apiRequestHeaders = {
  'Content-Type': 'application/json',
};

export const cmsRequestHeaders = {
  'X-API-KEY': envVariables.CMS_KEY,
};
