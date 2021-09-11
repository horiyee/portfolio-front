import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { fetchCmsPostsApiClient } from '../../api/clients/cmsPosts';
import { fetchExternalPostsApiClient } from '../../api/clients/externalPosts';
import { fetchMarkdownPostsApiClient } from '../../api/clients/markdownPosts';
import BlogIndexTemplate from '../../components/templates/blog/BlogIndexTemplate';
import { debugCategoryNames } from '../../config';
import { useSetCmsPosts } from '../../hooks/cmsPosts';
import { useSetExternalPosts } from '../../hooks/externalPosts';
import { useSetMarkdownPosts } from '../../hooks/markdownPosts';
import { CmsPost } from '../../types/cmsPost';
import { ExternalPost } from '../../types/externalPost';
import { MarkdownPost } from '../../types/markdownPost';

type StaticProps = {
  cmsPosts: CmsPost[];
  externalPosts: ExternalPost[];
  markdownPosts: MarkdownPost[] | null;
};

const BlogIndexPage: NextPage<StaticProps> = ({
  cmsPosts,
  externalPosts,
  markdownPosts,
}) => {
  if (cmsPosts.length !== 0) {
    useSetCmsPosts(cmsPosts);
  }
  if (externalPosts.length !== 0) {
    useSetExternalPosts(externalPosts);
  }
  if (markdownPosts) {
    useSetMarkdownPosts(markdownPosts);
  }

  return <BlogIndexTemplate />;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const cmsPostsRes = await fetchCmsPostsApiClient();
    const externalPostsRes = await fetchExternalPostsApiClient();
    const markdownPostsRes = await fetchMarkdownPostsApiClient();

    const props: StaticProps = {
      cmsPosts: cmsPostsRes.contents.filter(
        post => debugCategoryNames.includes(post.category.name) === false,
      ),
      externalPosts: externalPostsRes.externalPosts.filter(
        post => debugCategoryNames.includes(post.categoryName) === false,
      ),
      markdownPosts: markdownPostsRes.markdownPosts.filter(
        post => debugCategoryNames.includes(post.categoryName) === false,
      ),
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: StaticProps = {
      cmsPosts: [],
      externalPosts: [],
      markdownPosts: [],
    };

    return { props };
  }
};

export default BlogIndexPage;
