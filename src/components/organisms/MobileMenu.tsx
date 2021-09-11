import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { showMobileMenuState } from '../../recoil/atoms/showMobileMenu';
import { colors, zIndexes } from '../../styles/variables';
import IconButton from '../atoms/buttons/IconButton';
import ClearIcon from '../atoms/icons/ClearIcon';
import SideNavigation from './SideNavigation';

const Root = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  padding-left: 48px;

  z-index: ${zIndexes.mobileMenu};
  touch-action: none;

  background: ${colors.white};
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 24px;
  right: 32px;

  fill: ${colors.buttonGray};
`;

const MobileMenu: React.VFC = () => {
  const setShowMobileMenu = useSetRecoilState(showMobileMenuState);

  return (
    <Root>
      <CloseButton
        icon={<ClearIcon />}
        onClick={() => setShowMobileMenu(false)}
      />

      <SideNavigation />
    </Root>
  );
};

export default MobileMenu;
