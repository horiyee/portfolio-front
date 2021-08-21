import React from 'react';
import styled from 'styled-components';
import {
  ContentsWrapper,
  SideNavigationWrapper,
} from '../../../styles/components';
import Header from '../../organisms/Header';
import SideNavigation from '../../organisms/SideNavigation';

type Props = {
  children?: React.ReactNode;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const Contents = styled.main`
  display: inline-block;
  width: 100%;
  padding: 128px 32px;
`;

const BlogTemplate: React.VFC<Props> = ({ children }) => {
  return (
    <Root>
      <Header />

      <SideNavigationWrapper>
        <SideNavigation />
      </SideNavigationWrapper>

      <ContentsWrapper>
        <Contents>{children}</Contents>
      </ContentsWrapper>
    </Root>
  );
};

export default BlogTemplate;
