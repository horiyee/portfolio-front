import { selector } from 'recoil';
import { recoilKeys } from '..';
import { paths } from '../../config/paths';
import { WhatsNew } from '../../types/whatsNew';
import { announcementsState } from '../atoms/announcements';
import { cmsPostsState } from '../atoms/cmsPosts';
import { externalPostsState } from '../atoms/externalPosts';

export const whatsNewState = selector<WhatsNew[]>({
  key: recoilKeys.selectors.WHATS_NEW,
  get: ({ get }) => {
    const cmsPosts = get(cmsPostsState);
    const externalPosts = get(externalPostsState);
    const announcements = get(announcementsState);

    const whatsNew: WhatsNew[] = [];

    cmsPosts.forEach(post => {
      const w: WhatsNew = {
        content: `ブログ記事『${post.title}』を書きました！`,
        categoryName: '記事更新',
        url: `${paths.blog.posts}/${post.id}`,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      };

      whatsNew.push(w);
    });

    externalPosts.forEach(post => {
      const w: WhatsNew = {
        content: `${post.url.includes('qiita') ? 'Qiita' : ''}記事『${
          post.title
        }』を書きました！`,
        categoryName: '記事更新',
        url: post.url,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      };

      whatsNew.push(w);
    });

    announcements.forEach(post => {
      const w: WhatsNew = {
        content: post.content,
        categoryName: 'お知らせ',
        url: null,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
      };

      whatsNew.push(w);
    });

    const sortedWhatsNew = whatsNew.concat();
    sortedWhatsNew.sort((a, b) => {
      const _a = new Date(a.publishedAt);
      const _b = new Date(b.publishedAt);

      if (_a < _b) {
        return 1;
      } else if (_a > _b) {
        return -1;
      }
      return 0;
    });

    return sortedWhatsNew;
  },
});
