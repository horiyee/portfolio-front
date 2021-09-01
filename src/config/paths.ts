export const paths = {
  admin: {
    index: '/admin',
    markdownPosts: {
      index: '/admin/markdown_posts',
      new: '/admin/markdown_posts/new',
    },
    users: {
      index: '/admin/users',
    },
  },
  index: '/',
  about: '/about',
  development: '/development',
  technology: '/technology',
  blog: '/blog',
  notFound: '/404',
} as const;
