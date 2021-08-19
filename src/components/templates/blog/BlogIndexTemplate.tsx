import React from 'react';
import { useRecoilValue } from 'recoil';
import { cmsPostsState } from '../../../recoil/atoms/cmsPosts';

const BlogIndexTemplate: React.VFC = () => {
  const cmsPosts = useRecoilValue(cmsPostsState);
  console.log(cmsPosts);

  return null;
};

export default BlogIndexTemplate;
