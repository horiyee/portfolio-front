import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';
import NextLink from '../../components/atoms/NextLink';
import { paths } from '../../config/paths';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const Title = styled.h1``;

const OAuthDebugPage: NextPage = () => {
  const [session, loading] = useSession();

  console.log(session);

  return (
    <Root>
      <Title>OAuth Debug Page</Title>

      <NextLink href={paths.admin.index}>To Admin</NextLink>

      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {session ? (
            <>
              Signed in as {session.user.name} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </>
      )}
    </Root>
  );
};

export default OAuthDebugPage;
