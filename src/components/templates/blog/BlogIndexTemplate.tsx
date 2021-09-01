import React from 'react';
import Section from '../../molecules/Section';
import BlogPosts from '../../organisms/blog/BlogPosts';
import BlogTemplate from '../common/BlogTemplate';

const BlogIndexTemplate: React.VFC = () => {
  return (
    <BlogTemplate>
      <Section enHeading="Blog Posts" jpHeading="ブログ記事" id="posts">
        <BlogPosts />
      </Section>
    </BlogTemplate>
  );
};

export default BlogIndexTemplate;
