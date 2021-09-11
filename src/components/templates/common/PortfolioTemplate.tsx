import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { showMobileMenuState } from '../../../recoil/atoms/showMobileMenu';
import {
  ContentsWrapper,
  SideNavigationWrapper,
} from '../../../styles/components';
import { MetaData } from '../../../types';
import NextHead from '../../atoms/NextHead';
import MobileMenu from '../../organisms/MobileMenu';
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
  const router = useRouter();
  const { pathname } = router;

  const [showMobileMenu, setShowMobileMenu] =
    useRecoilState(showMobileMenuState);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

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

      {showMobileMenu ? <MobileMenu /> : null}
    </Root>
  );
};

export default PortfolioTemplate;
