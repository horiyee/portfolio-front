export const apiPaths = {
  v1: {
    markdownPosts: '/v1/markdown_posts',
    bookmarks: '/v1/bookmarks',
    externalPosts: '/v1/external_posts',
  },
} as const;

export const cmsPaths = {
  posts: '/posts',
  qiitaPosts: '/qiita_posts',
  announcements: '/announcements',
} as const;
