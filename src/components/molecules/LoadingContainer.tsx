import React from 'react';
import styled from 'styled-components';
import Loader from '../atoms/Loader';

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LoadingContainer: React.VFC = () => {
  return (
    <Root>
      <Loader />
    </Root>
  );
};

export default LoadingContainer;
