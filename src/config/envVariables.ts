export const envVariables = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: process.env.API_BASE_URL,
  CMS_BASE_URL: process.env.CMS_BASE_URL,
  CMS_KEY: process.env.CMS_KEY,
  GITHUB_OAUTH_ID: process.env.GITHUB_OAUTH_ID,
  GITHUB_OAUTH_SECRET: process.env.GITHUB_OAUTH_SECRET,
  GITHUB_OAUTH_ALLOW_USER_EMAIL: process.env.GITHUB_OAUTH_ALLOW_USER_EMAIL,
} as const;
