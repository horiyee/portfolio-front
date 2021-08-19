import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { cmsPostsState } from '../../../recoil/atoms/cmsPosts';
import Post from '../../molecules/blog/Post';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const CmsPosts: React.VFC = () => {
  const cmsPosts = useRecoilValue(cmsPostsState);

  return (
    <Root>
      {cmsPosts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </Root>
  );
};

export default CmsPosts;
