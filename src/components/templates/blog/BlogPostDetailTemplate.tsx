import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { fontSize, hoverWithTransition } from '../../../styles/mixins';
import { colors, fontFamilies } from '../../../styles/variables';
import { MetaData } from '../../../types';
import { CmsPost } from '../../../types/cmsPost';
import NextImage from '../../atoms/NextImage';
import NextLink from '../../atoms/NextLink';
import Time from '../../atoms/Time';
import PostDetailBody from '../../molecules/blog/PostDetailBody';
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
  padding: 24px 16px;
`;

const BlogIndexLink = styled(NextLink)`
  ${hoverWithTransition(`
    color: ${colors.defaultBlue};
  `)};
`;

const NavigationDivider = styled.span`
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
  display: inline-block;
  width: 100%;
`;

const StyledTime = styled(Time)`
  ${fontSize(18)};
  font-family: ${fontFamilies.enFont};
`;

const StyledPostDetailBody = styled(PostDetailBody)`
  padding: 32px 0;
`;

const BlogPostDetailTemplate: React.VFC<Props> = ({ postDetail }) => {
  const router = useRouter();

  if (postDetail === null) {
    // TODO: implement and push error page
    router.push(paths.notFound);
    return null;
  }

  const metaData: MetaData = {
    pageTitle: postDetail.title,
    commonTitle: 'hori-blog',
    pagePath: `${paths.blog.posts}/${postDetail.id}`,
    ogpImageUrl: postDetail.thumbnail.url,
    description: '',
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
              datetime={postDetail.updatedAt}
              seperateWithPeriod
              dateOnly
            />
          </HeaderAsideInfo>
        </Header>

        <StyledPostDetailBody postBody={postDetail.body} />
      </BlogPostDetailWrapper>
    </BlogTemplate>
  );
};

export default BlogPostDetailTemplate;
