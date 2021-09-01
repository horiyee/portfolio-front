import React from 'react';
import styled from 'styled-components';
import { fontSize, hoverWithTransition, mqPc } from '../../../styles/mixins';
import type { BlogPost } from '../../../types/blogPost';
import NextImage from '../../atoms/NextImage';
import NextLink from '../../atoms/NextLink';

type Props = {
  post: BlogPost;
};

const Root = styled.article`
  position: relative;
  display: inline-block;

  ${mqPc(`
    width: calc(100% - 64px);
    margin: 32px;
  `)};
  width: 100%;
  margin: 32px 0;

  border-radius: 28px;

  overflow: hidden;

  box-shadow: 0 10px 25px 0 rgb(0 0 0 / 25%);
  ${hoverWithTransition(`
    opacity: 0.92;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.25);
  `)};
`;

const Thumbnail = styled(NextImage)``;

const InfoWrapper = styled.div`
  display: inline-block;
  width: 100%;

  padding: 32px;
`;

const Title = styled.h2`
  ${fontSize(24)}
  font-weight: 600;
`;

const ArticleLink = styled(NextLink)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 28px;
`;

const Post: React.VFC<Props> = ({ post }) => {
  return (
    <Root>
      <Thumbnail
        src={post.thumbnailUrl}
        alt={`『${post.title}』のサムネイル`}
        width={1200}
        height={630}
      />

      <InfoWrapper>
        <Title>{post.title}</Title>
      </InfoWrapper>

      <ArticleLink href={post.url} />
    </Root>
  );
};

export default Post;
