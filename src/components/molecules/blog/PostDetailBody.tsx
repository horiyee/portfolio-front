import React from 'react';
import styled from 'styled-components';
import StyledInnerHTML from '../../atoms/StyledInnerHTML';

type Props = {
  postBody: string;
};
const Root = styled.main`
  display: inline-block;
  width: 100%;
`;

const PostDetailBody: React.VFC<Props> = ({ postBody }) => {
  return (
    <StyledInnerHTML>
      <Root dangerouslySetInnerHTML={{ __html: postBody }} />
    </StyledInnerHTML>
  );
};

export default PostDetailBody;
