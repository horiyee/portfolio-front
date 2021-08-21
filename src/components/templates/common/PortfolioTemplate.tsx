import React from 'react';
import styled from 'styled-components';
import { mqPc } from '../../../styles/mixins';
import Header from '../../molecules/Header';
import SideNavigation from '../../organisms/SideNavigation';

type Props = {
  children?: React.ReactNode;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const SideNavigationWrapper = styled.div`
  display: none;
  ${mqPc(`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 100vh;
  `)};
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${mqPc(`padding-left: 320px;`)};
`;

const Contents = styled.main`
  display: inline-block;
  width: 100%;
  padding: 128px 32px;
  ${mqPc(`max-width: 700px;`)}
`;

const PortfolioTemplate: React.VFC<Props> = ({ children }) => {
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

export default PortfolioTemplate;
