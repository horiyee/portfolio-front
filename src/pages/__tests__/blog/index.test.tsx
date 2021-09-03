import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import { CmsPost } from '../../../types/cmsPost';
import { MarkdownPost } from '../../../types/markdownPost';
import { QiitaPost } from '../../../types/qiitaPost';
import BlogIndexPage from '../../blog';

describe('pages/blog/index', () => {
  describe('', () => {
    describe('', () => {
      type StaticProps = {
        cmsPosts: CmsPost[];
        qiitaPosts: QiitaPost[];
        markdownPosts: MarkdownPost[] | null;
      };
      const staticProps: StaticProps = {
        cmsPosts: [],
        qiitaPosts: [],
        markdownPosts: [],
      };

      const component = renderer.create(
        <RecoilRoot>
          <BlogIndexPage {...staticProps} />
        </RecoilRoot>,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
