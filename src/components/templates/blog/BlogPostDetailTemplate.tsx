import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { fontSize } from '../../../styles/mixins';
import { fontFamilies } from '../../../styles/variables';
import { CmsPost } from '../../../types/cmsPost';
import NextImage from '../../atoms/NextImage';
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
  display: inline-block;
  width: 100%;
`;

const Thumbnail = styled(NextImage)``;

const Header = styled.header`
  display: inline-block;
  width: 100%;
`;

const Title = styled.h1``;

const HeaderAsideInfo = styled.aside`
  display: inline-block;
  width: 100%;
`;

const StyledTime = styled(Time)`
  ${fontSize(18)};
  font-family: ${fontFamilies.enFont};
`;

const BlogPostDetailTemplate: React.VFC<Props> = ({ postDetail }) => {
  const router = useRouter();

  if (postDetail === null) {
    // TODO: implement and push error page
    router.push(paths.notFound);
    return null;
  }

  return (
    <BlogTemplate>
      <BlogPostDetailWrapper>
        <Navigation></Navigation>

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

        <PostDetailBody postBody={postDetail.body} />
      </BlogPostDetailWrapper>
    </BlogTemplate>
  );
};

export default BlogPostDetailTemplate;
