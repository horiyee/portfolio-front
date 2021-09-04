export const apiPaths = {
  v1: {
    markdownPosts: '/v1/markdown_posts',
    bookmarks: '/v1/bookmarks',
  },
} as const;

export const cmsPaths = {
  posts: '/posts',
  qiitaPosts: '/qiita_posts',
  announcements: '/announcements',
} as const;
