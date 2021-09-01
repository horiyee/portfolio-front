import { selector } from 'recoil';
import { recoilKeys } from '..';
import { paths } from '../../config/paths';
import { WhatsNew } from '../../types/whatsNew';
import { announcementsState } from '../atoms/announcements';
import { cmsPostsState } from '../atoms/cmsPosts';
import { qiitaPostsState } from '../atoms/qiitaPosts';

export const whatsNewState = selector<WhatsNew[]>({
  key: recoilKeys.selectors.WHATS_NEW,
  get: ({ get }) => {
    const cmsPosts = get(cmsPostsState);
    const qiitaPosts = get(qiitaPostsState);
    const announcements = get(announcementsState);

    const whatsNew: WhatsNew[] = [];

    cmsPosts.forEach(post => {
      const w: WhatsNew = {
        content: `ブログ記事『${post.title}』を書きました！`,
        categoryName: '記事更新',
        url: `${paths.blog}/posts/${post.id}`,
        debug: false,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };

      whatsNew.push(w);
    });

    qiitaPosts.forEach(post => {
      const w: WhatsNew = {
        content: `Qiita記事『${post.title}』を書きました！`,
        categoryName: '記事更新',
        url: post.url,
        debug: false,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };

      whatsNew.push(w);
    });

    announcements.forEach(post => {
      const w: WhatsNew = {
        content: post.content,
        categoryName: 'お知らせ',
        url: null,
        debug: post.debug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };

      whatsNew.push(w);
    });

    const sortedWhatsNew = whatsNew.concat();
    sortedWhatsNew.sort((a, b) => {
      const _a = new Date(a.updatedAt);
      const _b = new Date(b.updatedAt);

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
