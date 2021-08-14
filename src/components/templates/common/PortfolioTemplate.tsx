import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../../organisms/SideNavigation';

type Props = {
  children?: React.ReactNode;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const SideNavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 100vh;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 320px;
`;

const Contents = styled.main`
  display: inline-block;
  width: 100%;
  max-width: 700px;
  padding: 128px 32px;
`;

const PortfolioTemplate: React.VFC<Props> = ({ children }) => {
  return (
    <Root>
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
