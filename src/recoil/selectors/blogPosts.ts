import { selector } from 'recoil';
import { recoilKeys } from '..';
import { paths } from '../../config/paths';
import { Post } from '../../types/post';
import { cmsPostsState } from '../atoms/cmsPosts';
import { externalPostsState } from '../atoms/externalPosts';

export const blogPostsState = selector<Post[]>({
  key: recoilKeys.selectors.BLOG_POSTS,
  get: ({ get }) => {
    const cmsPosts = get(cmsPostsState);
    const externalPosts = get(externalPostsState);

    const blogPosts: Post[] = [];

    cmsPosts.forEach(post => {
      const p: Post = {
        id: post.id,
        title: post.title,
        url: `${paths.blog.posts}/${post.id}`,
        thumbnailUrl: post.thumbnail.url,
        categoryName: post.category.name,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      };

      blogPosts.push(p);
    });

    externalPosts.forEach(post => {
      const p: Post = {
        id: String(post.id),
        title: post.title,
        url: post.url,
        thumbnailUrl: post.thumbnailUrl,
        categoryName: post.categoryName,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      };

      blogPosts.push(p);
    });

    const sortedBlogPosts = blogPosts.concat();
    sortedBlogPosts.sort((a, b) => {
      const _a = new Date(a.publishedAt);
      const _b = new Date(b.publishedAt);

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
