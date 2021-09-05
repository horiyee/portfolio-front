import React from 'react';
import Head from 'next/head';
import { MetaData } from '../../types';

type Props = MetaData;

const NextHead: React.VFC<Props> = ({
  pageTitle,
  commonTitle = 'Portfolio of Kaito Horiuchi',
}) => {
  return (
    <Head>
      <title>
        {pageTitle} | {commonTitle}
      </title>
    </Head>
  );
};

export default NextHead;
