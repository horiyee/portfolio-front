import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { snackbarOptionState } from '../../recoil/atoms/snackbarOption';
import { colors, zIndexes } from '../../styles/variables';
import { SnackbarColors } from '../../types';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${zIndexes.snackbar};

  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;

  padding: 48px;

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

  console.log(snackbarOption);

  useEffect(() => {
    setTimeout(() => {
      setSnackbarOption(null);
    }, 5000);
  }, [snackbarOption]);

  return (
    <Root>
      {snackbarOption ? (
        <SnackbarContent color={snackbarOption.color}>
          {snackbarOption.content}
        </SnackbarContent>
      ) : null}
    </Root>
  );
};

export default Snackbar;
