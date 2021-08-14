import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';

type Props = {
  children?: React.ReactNode;
};

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;

  padding: 0 16px;

  background: ${colors.white};

  border-top: 1px solid ${colors.borderGray};
`;

const AdminBottomActionBar: React.VFC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AdminBottomActionBar;
