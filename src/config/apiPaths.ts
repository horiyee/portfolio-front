export const apiPaths = {
  v1: {
    markdownPosts: '/v1/markdown_posts',
    bookmarks: '/v1/bookmarks',
    externalPosts: '/v1/external_posts',
    categories: '/v1/categories',
  },
} as const;

export const cmsPaths = {
  posts: '/posts',
  announcements: '/announcements',
} as const;
