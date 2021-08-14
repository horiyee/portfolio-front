import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: string;
};

const Root = styled.h1``;

const AdminPageTitle: React.VFC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AdminPageTitle;
