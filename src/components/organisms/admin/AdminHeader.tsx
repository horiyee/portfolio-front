import React from 'react';
import styled from 'styled-components';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 64px;
`;

const AdminHeader: React.VFC = () => {
  return <Root>Admin</Root>;
};

export default AdminHeader;
