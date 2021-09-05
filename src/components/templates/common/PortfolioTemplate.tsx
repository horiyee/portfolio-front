import React from 'react';
import styled from 'styled-components';
import {
  ContentsWrapper,
  SideNavigationWrapper,
} from '../../../styles/components';
import { MetaData } from '../../../types';
import NextHead from '../../atoms/NextHead';
import Header from '../../organisms/Header';
import SideNavigation from '../../organisms/SideNavigation';

type Props = {
  children?: React.ReactNode;
  metaData: MetaData;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const Contents = styled.main`
  display: inline-block;
  width: 100%;
  max-width: 700px;

  padding: 128px 32px;
`;

const PortfolioTemplate: React.VFC<Props> = ({ children, metaData }) => {
  return (
    <Root>
      <NextHead {...metaData} />

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

export default PortfolioTemplate;
