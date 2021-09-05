import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../styles/global';

const App: React.VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  );
};

export default App;
