import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import {
  fetchCmsPostApiClient,
  fetchCmsPostsApiClient,
} from '../../../api/clients/cmsPosts';
import BlogPostDetailTemplate from '../../../components/templates/blog/BlogPostDetailTemplate';
import { paths } from '../../../config/paths';
import { QueryParameterDuplicateError } from '../../../types';
import { CmsPost } from '../../../types/cmsPost';

type StaticProps = {
  postDetail: CmsPost | null;
};

const BlogPostDetailPage: NextPage<StaticProps> = ({ postDetail }) => {
  return <BlogPostDetailTemplate postDetail={postDetail} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetchCmsPostsApiClient();
    const ids = res.contents.map(post => `${paths.blog.posts}/${post.id}`);

    return { paths: ids, fallback: false };
  } catch (e) {
    console.error(e);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<StaticProps> = async context => {
  const id = context.params.id;

  try {
    if (typeof id !== `string`) {
      throw new QueryParameterDuplicateError();
    }

    const res = await fetchCmsPostApiClient(id);
    const props: StaticProps = {
      postDetail: res,
    };

    return { props };
  } catch (e) {
    console.error(e);

    const props: StaticProps = {
      postDetail: null,
    };

    return { props };
  }
};

export default BlogPostDetailPage;
