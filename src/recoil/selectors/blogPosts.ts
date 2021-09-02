import { selector } from 'recoil';
import { recoilKeys } from '..';
import { paths } from '../../config/paths';
import { BlogPost } from '../../types/blogPost';
import { cmsPostsState } from '../atoms/cmsPosts';
import { qiitaPostsState } from '../atoms/qiitaPosts';

export const blogPostsState = selector<BlogPost[]>({
  key: recoilKeys.selectors.BLOG_POSTS,
  get: ({ get }) => {
    const cmsPosts = get(cmsPostsState);
    const qiitaPosts = get(qiitaPostsState);

    const blogPosts: BlogPost[] = [];

    cmsPosts.forEach(post => {
      const p: BlogPost = {
        id: post.id,
        title: post.title,
        url: `${paths.blog.posts}/${post.id}`,
        thumbnailUrl: post.thumbnail.url,
        categoryName: post.category.name,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };

      blogPosts.push(p);
    });

    qiitaPosts.forEach(post => {
      const p: BlogPost = {
        id: post.id,
        title: post.title,
        url: post.url,
        thumbnailUrl: post.thumbnailUrl,
        categoryName: post.category.name,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };

      blogPosts.push(p);
    });

    const sortedBlogPosts = blogPosts.concat();
    sortedBlogPosts.sort((a, b) => {
      const _a = new Date(a.updatedAt);
      const _b = new Date(b.updatedAt);

      if (_a < _b) {
        return 1;
      } else if (_a > _b) {
        return -1;
      }
      return 0;
    });

    return sortedBlogPosts;
  },
});
