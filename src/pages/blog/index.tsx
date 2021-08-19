import { NextPage } from 'next';
import React from 'react';
import { fetchCmsPostsApiClient } from '../../api/clients/cmsPosts';
import BlogIndexTemplate from '../../components/templates/blog/BlogIndexTemplate';
import { useSetCmsPosts } from '../../hooks/cmsPosts';
import { CmsPost } from '../../types/cmsPost';

type Props = {
  cmsPosts: CmsPost[];
};

const BlogIndexPage: NextPage<Props> = ({ cmsPosts }) => {
  if (cmsPosts) {
    useSetCmsPosts(cmsPosts);
  }

  return <BlogIndexTemplate />;
};

export const getStaticProps = async () => {
  try {
    const res = await fetchCmsPostsApiClient();
    const props: Props = {
      cmsPosts: res.contents,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: Props = {
      cmsPosts: null,
    };

    return { props };
  }
};

export default BlogIndexPage;
