import { signOut } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { colors } from '../../../styles/variables';
import NextLink from '../../atoms/NextLink';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 64px;
`;

const AdminTopLink = styled(NextLink)`
  color: ${colors.defaultBlue};
`;

const AdminHeader: React.VFC = () => {
  return (
    <Root>
      <AdminTopLink href={paths.admin.index}>Portfolio Admin</AdminTopLink>
      <button onClick={() => signOut()}>Logout</button>
    </Root>
  );
};

export default AdminHeader;
