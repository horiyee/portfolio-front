import { NextPage } from 'next';
import React from 'react';
import { fetchCmsPostsApiClient } from '../../api/clients/cmsPosts';
import { fetchQiitaPostsApiClient } from '../../api/clients/qiitaPosts';
import BlogIndexTemplate from '../../components/templates/blog/BlogIndexTemplate';
import { useSetCmsPosts } from '../../hooks/cmsPosts';
import { useSetQiitaPosts } from '../../hooks/qiitaPosts';
import { CmsPost } from '../../types/cmsPost';
import { QiitaPost } from '../../types/qiitaPost';

type Props = {
  cmsPosts: CmsPost[];
  qiitaPosts: QiitaPost[];
};

const BlogIndexPage: NextPage<Props> = ({ cmsPosts, qiitaPosts }) => {
  if (cmsPosts.length !== 0) {
    useSetCmsPosts(cmsPosts);
  }
  if (qiitaPosts.length !== 0) {
    useSetQiitaPosts(qiitaPosts);
  }

  return <BlogIndexTemplate />;
};

export const getStaticProps = async () => {
  try {
    const cmsPostsRes = await fetchCmsPostsApiClient();
    const qiitaPostsRes = await fetchQiitaPostsApiClient();
    const props: Props = {
      cmsPosts: cmsPostsRes.contents,
      qiitaPosts: qiitaPostsRes.contents,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: Props = {
      cmsPosts: [],
      qiitaPosts: [],
    };

    return { props };
  }
};

export default BlogIndexPage;
