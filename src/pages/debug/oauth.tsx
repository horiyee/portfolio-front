import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';

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

      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {session ? (
            <>
              Signed in as {session.user.email} <br />
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
