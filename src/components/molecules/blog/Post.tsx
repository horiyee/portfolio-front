import React from 'react';
import styled from 'styled-components';
import type { BlogPost } from '../../../types/blogPost';

type Props = {
  post: BlogPost;
};

const Root = styled.article``;

const Title = styled.h2``;

const Post: React.VFC<Props> = ({ post }) => {
  return (
    <Root>
      <Title>{post.title}</Title>
    </Root>
  );
};

export default Post;
