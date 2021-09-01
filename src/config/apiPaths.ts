export const apiPaths = {
  index: '/',
  ping: '/ping',
  healthCheck: '/health_check',
  v1: {
    markdownPosts: '/v1/markdown_posts',
  },
} as const;

export const cmsPaths = {
  posts: '/posts',
  qiitaPosts: '/qiita_posts',
  announcements: '/announcements',
} as const;
