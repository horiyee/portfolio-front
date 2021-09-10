import { signOut, useSession } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { fontSize } from '../../../styles/mixins';
import { colors, fontFamilies, zIndexes } from '../../../styles/variables';
import NextLink from '../../atoms/NextLink';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${zIndexes.header};

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;

  padding: 0 16px;

  background: ${colors.darkBlue};
`;

const AdminTopLink = styled(NextLink)`
  color: ${colors.white};
  font-family: ${fontFamilies.enFont};
  ${fontSize(24)}
`;

const LogoutButton = styled.button`
  color: ${colors.white};
`;

const AdminHeader: React.VFC = () => {
  const [session, _] = useSession();

  return (
    <Root>
      <AdminTopLink href={paths.admin.index}>Portfolio Admin</AdminTopLink>
      {session ? (
        <LogoutButton onClick={() => signOut()}>ログアウト</LogoutButton>
      ) : null}
    </Root>
  );
};

export default AdminHeader;
