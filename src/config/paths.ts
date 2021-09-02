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
  blog: { index: '/blog', posts: '/blog/posts' },
  notFound: '/404',
} as const;
