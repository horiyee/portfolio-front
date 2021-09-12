import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { getUrl } from '../../../config';
import { paths } from '../../../config/paths';
import {
  fontSize,
  hover,
  hoverWithTransition,
  mqSp,
} from '../../../styles/mixins';
import { colors, fontFamilies } from '../../../styles/variables';
import { MetaData, WebShareData } from '../../../types';
import { CmsPost } from '../../../types/cmsPost';
import ClipboardCopyButton from '../../atoms/buttons/ClipboardCopyButton';
import WebShareButton from '../../atoms/buttons/WebShareButton';
import HorizontalLine from '../../atoms/HorizontalLine';
import ArrowBackIcon from '../../atoms/icons/ArrowBackIcon';
import Icon from '../../atoms/icons/Icon';
import NextImage from '../../atoms/NextImage';
import NextLink from '../../atoms/NextLink';
import Time from '../../atoms/Time';
import BlogPostDetailBody from '../../molecules/blog/PostDetailBody';
import BlogTemplate from '../common/BlogTemplate';

type Props = {
  postDetail: CmsPost | null;
};

const BlogPostDetailWrapper = styled.article`
  display: inline-block;
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px -0;
`;

const BlogIndexLink = styled(NextLink)`
  ${mqSp(`display: none;`)};
  ${hoverWithTransition(`
    color: ${colors.defaultBlue};
  `)};
`;

const NavigationDivider = styled.span`
  ${mqSp(`display: none;`)};
  padding: 0 8px;
`;

const CategoryName = styled.span`
  font-weight: 300;

  padding: 4px 16px;
  border-radius: 28px;
  border: 1px solid ${colors.borderBlack};
`;

const Thumbnail = styled(NextImage)``;

const Header = styled.header`
  display: inline-block;
  width: 100%;
`;

const Title = styled.h1`
  padding: 32px 0;
`;

const HeaderAsideInfo = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTime = styled(Time)`
  ${fontSize(18)};
  font-family: ${fontFamilies.enFont};
`;

const ShareButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBlogPostDetailBody = styled(BlogPostDetailBody)`
  padding: 32px 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledLink = styled(NextLink)`
  display: flex;
  align-items: center;

  fill: ${colors.defaultBlue};
  color: ${colors.defaultBlue};

  opacity: 0.9;
  ${hover(`opacity: 1;`)};
`;

const StyledIcon = styled(Icon)`
  margin-right: 8px;
`;

const BlogPostDetailTemplate: React.VFC<Props> = ({ postDetail }) => {
  const router = useRouter();

  if (postDetail === null) {
    // TODO: implement and push error page
    router.push(paths.notFound);
    return null;
  }

  const pagePath = `${paths.blog.posts}/${postDetail.id}`;
  const description = `hori-blog『${postDetail.title}』`;
  const title = postDetail.title;

  const metaData: MetaData = {
    pageTitle: title,
    commonTitle: 'hori-blog',
    pagePath: pagePath,
    ogpImageUrl: postDetail.thumbnail.url,
    description: description,
  };

  const webShareData: WebShareData = {
    url: getUrl(pagePath),
    text: description,
    title: title,
  };

  return (
    <BlogTemplate metaData={metaData}>
      <BlogPostDetailWrapper>
        <Navigation>
          <BlogIndexLink href={paths.blog.index}>ブログ記事</BlogIndexLink>
          <NavigationDivider>―</NavigationDivider>
          <CategoryName>{postDetail.category.name}</CategoryName>
        </Navigation>

        <Thumbnail
          src={postDetail.thumbnail.url}
          alt={`ブログ記事『${postDetail.title}』のサムネイル`}
          width={postDetail.thumbnail.width}
          height={postDetail.thumbnail.height}
        />

        <Header>
          <Title>{postDetail.title}</Title>
          <HeaderAsideInfo>
            <StyledTime
              datetime={postDetail.publishedAt}
              seperateWithPeriod
              dateOnly
            />

            <ShareButtonsWrapper>
              <ClipboardCopyButton data={webShareData.url} />
              <WebShareButton webShareData={webShareData} />
            </ShareButtonsWrapper>
          </HeaderAsideInfo>
        </Header>

        <StyledBlogPostDetailBody postBody={postDetail.body} />
      </BlogPostDetailWrapper>

      <HorizontalLine />

      <Footer>
        <StyledLink href={paths.blog.index}>
          <StyledIcon icon={<ArrowBackIcon />} />
          記事一覧に戻る
        </StyledLink>
      </Footer>
    </BlogTemplate>
  );
};

export default BlogPostDetailTemplate;
