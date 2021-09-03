import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { fetchCmsPostsApiClient } from '../../api/clients/cmsPosts';
import { fetchMarkdownPostsApiClient } from '../../api/clients/markdownPosts';
import { fetchQiitaPostsApiClient } from '../../api/clients/qiitaPosts';
import BlogIndexTemplate from '../../components/templates/blog/BlogIndexTemplate';
import { useSetCmsPosts } from '../../hooks/cmsPosts';
import { useSetMarkdownPosts } from '../../hooks/markdownPosts';
import { useSetQiitaPosts } from '../../hooks/qiitaPosts';
import { CmsPost } from '../../types/cmsPost';
import { MarkdownPost } from '../../types/markdownPost';
import { QiitaPost } from '../../types/qiitaPost';

type StaticProps = {
  cmsPosts: CmsPost[];
  qiitaPosts: QiitaPost[];
  markdownPosts: MarkdownPost[] | null;
};

const BlogIndexPage: NextPage<StaticProps> = ({
  cmsPosts,
  qiitaPosts,
  markdownPosts,
}) => {
  if (cmsPosts.length !== 0) {
    useSetCmsPosts(cmsPosts);
  }
  if (qiitaPosts.length !== 0) {
    useSetQiitaPosts(qiitaPosts);
  }
  if (markdownPosts) {
    useSetMarkdownPosts(markdownPosts);
  }

  return <BlogIndexTemplate />;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const cmsPostsRes = await fetchCmsPostsApiClient();
    const qiitaPostsRes = await fetchQiitaPostsApiClient();
    const markdownPostsRes = await fetchMarkdownPostsApiClient();

    const props: StaticProps = {
      cmsPosts: cmsPostsRes.contents,
      qiitaPosts: qiitaPostsRes.contents,
      markdownPosts: markdownPostsRes.markdownPosts,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: StaticProps = {
      cmsPosts: [],
      qiitaPosts: [],
      markdownPosts: [],
    };

    return { props };
  }
};

export default BlogIndexPage;
