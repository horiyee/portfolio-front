import React from 'react';
import Head from 'next/head';
import { MetaData } from '../../types';
import { getUrl } from '../../config';

type Props = MetaData;

const NextHead: React.VFC<Props> = ({
  pageTitle,
  commonTitle,
  description = '学生エンジニア 堀内 凱登 / Kaito Horiuchi (hori) のポートフォリオ・ブログです。',
  pagePath,
  ogpImageUrl = getUrl('/ogp.jpg'),
  noIndex,
}) => {
  const siteName = 'Portfolio of Kaito Horiuchi';

  const title = `${pageTitle}｜${commonTitle ? commonTitle : siteName}`;
  const url = getUrl(pagePath);

  return (
    <Head>
      <title>{title}</title>

      {noIndex ? <meta name="robots" content="noindex" /> : null}

      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={ogpImageUrl} />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
      <meta name="og:site_name" content={siteName} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@horri1520" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogpImageUrl} />
    </Head>
  );
};

export default NextHead;
