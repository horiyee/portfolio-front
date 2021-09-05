import React from 'react';
import { paths } from '../../config/paths';
import { MetaData } from '../../types';
import PortfolioTemplate from './common/PortfolioTemplate';

const IndexTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'TOP',
    pagePath: paths.index,
  };

  return <PortfolioTemplate metaData={metaData}>IndexPage</PortfolioTemplate>;
};

export default IndexTemplate;
