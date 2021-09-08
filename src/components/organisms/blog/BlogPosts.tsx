import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { blogPostsState } from '../../../recoil/selectors/blogPosts';
import BlogPost from '../../molecules/blog/Post';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const BlogPosts: React.VFC = () => {
  const blogPosts = useRecoilValue(blogPostsState);

  return (
    <Root>
      {blogPosts.map((post, index) => (
        <BlogPost post={post} key={index} />
      ))}
    </Root>
  );
};

export default BlogPosts;
