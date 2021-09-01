import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import BlogPostDetailTemplate from '../../../components/templates/blog/BlogPostDetailTemplate';
import { paths } from '../../../config/paths';

const BlogPostDetailPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const id = query.id;

  console.log(id);

  return <BlogPostDetailTemplate postDetail={null} />;
};

export default BlogPostDetailPage;
