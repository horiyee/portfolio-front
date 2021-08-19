import React from 'react';
import Section from '../../molecules/Section';
import CmsPosts from '../../organisms/blog/CmsPosts';
import BlogTemplate from '../common/BlogTemplate';

const BlogIndexTemplate: React.VFC = () => {
  return (
    <BlogTemplate>
      <Section enHeading="Blog Posts" jpHeading="ブログ記事" id="posts">
        <CmsPosts />
      </Section>
    </BlogTemplate>
  );
};

export default BlogIndexTemplate;
