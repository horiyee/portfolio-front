import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { snackbarOptionState } from '../../recoil/atoms/snackbarOption';
import { colors, zIndexes } from '../../styles/variables';
import { SnackbarColors, SnackbarPositions } from '../../types';

type RootProps = {
  position: SnackbarPositions;
};
const Root = styled.div<RootProps>`
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${zIndexes.snackbar};

  display: flex;
  align-items: ${props =>
    props.position === 'bottom' ? 'flex-end' : 'flex-start'};
  justify-content: center;
  width: 100%;
  height: 100vh;

  padding: 128px 24px 96px 24px;

  pointer-events: none;
`;

type SnackbarContentProps = {
  color: SnackbarColors;
};
const SnackbarContent = styled.div<SnackbarContentProps>`
  display: inline-block;
  z-index: ${zIndexes.snackbar};

  padding: 8px 16px;

  border-radius: 4px;

  color: ${colors.white};
  background: ${props => props.color};
`;

const Snackbar: React.VFC = () => {
  const [snackbarOption, setSnackbarOption] =
    useRecoilState(snackbarOptionState);

  useEffect(() => {
    const memorizedSnackbarOption = snackbarOption;

    setTimeout(() => {
      if (snackbarOption === memorizedSnackbarOption) {
        setSnackbarOption(null);
      }
    }, 5000);
  }, [snackbarOption]);

  console.log(snackbarOption?.position === 'bottom' ? 'bottom' : 'top');

  return (
    <Root position={snackbarOption?.position === 'bottom' ? 'bottom' : 'top'}>
      {snackbarOption ? (
        <SnackbarContent color={snackbarOption.color}>
          {snackbarOption.content}
        </SnackbarContent>
      ) : null}
    </Root>
  );
};

export default Snackbar;
