import React from 'react';
import BlogTemplate from '../common/BlogTemplate';

type Props = {
  postDetail: null;
};

const BlogPostDetailTemplate: React.VFC<Props> = ({ postDetail }) => {
  return <BlogTemplate></BlogTemplate>;
};

export default BlogPostDetailTemplate;
