import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Root = styled.label`
  line-height: 2;
`;

const AdminFormLabel: React.VFC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AdminFormLabel;
