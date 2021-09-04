export const paths = {
  admin: {
    index: '/admin',
    markdownPosts: {
      index: '/admin/markdown_posts',
      new: '/admin/markdown_posts/new',
    },
    externalPosts: {
      index: '/admin/external_posts',
      new: '/admin/external_posts/new',
    },
    bookmarks: {
      index: '/admin/bookmarks',
      new: '/admin/bookmarks/new',
    },
  },
  index: '/',
  about: '/about',
  development: '/development',
  technology: '/technology',
  blog: { index: '/blog', posts: '/blog/posts' },
  notFound: '/404',
} as const;
