export const envVariables = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: process.env.API_BASE_URL,
  GITHUB_OAUTH_ID: process.env.GITHUB_OAUTH_ID,
  GITHUB_OAUTH_SECRET: process.env.GITHUB_OAUTH_SECRET,
} as const;
