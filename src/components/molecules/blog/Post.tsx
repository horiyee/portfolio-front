import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  hoverWithTransition,
  mqPc,
  mqSp,
} from '../../../styles/mixins';
import { colors, fontFamilies } from '../../../styles/variables';
import type { BlogPost } from '../../../types/blogPost';
import ChevronRightIcon from '../../atoms/icons/ChevronRightIcon';
import Icon from '../../atoms/icons/Icon';
import NextImage from '../../atoms/NextImage';
import NextLink from '../../atoms/NextLink';
import Time from '../../atoms/Time';

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

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mqSp(`
    flex-direction: column;
    align-items: flex-start
  `)}
`;

const UpdatedAt = styled(Time)`
  ${fontSize(18)};
  font-family: ${fontFamilies.enFont};

  margin: 8px 0;
`;

const CategoryName = styled.span`
  font-weight: 300;

  padding: 4px 16px;

  border: 1px solid ${colors.borderBlack};
  border-radius: 24px;
`;

const Main = styled.main`
  display: inline-block;
  width: 100%;

  margin: 24px 0;
`;

const Title = styled.h2`
  ${fontSize(24)}
  font-weight: 600;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Decoration = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  background: ${colors.defaultBlue};

  fill: ${colors.white};
`;

const Link = styled(NextLink)`
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
        <Header>
          <UpdatedAt datetime={post.updatedAt} seperateWithPeriod />
          <CategoryName>{post.categoryName}</CategoryName>
        </Header>

        <Main>
          <Title>{post.title}</Title>
        </Main>

        <Footer>
          <Decoration>
            <Icon icon={<ChevronRightIcon />} />
          </Decoration>
        </Footer>
      </InfoWrapper>

      <Link href={post.url} />
    </Root>
  );
};

export default Post;
