import React from 'react';
import { MetaData } from '../../types';
import PortfolioTemplate from './common/PortfolioTemplate';

const IndexTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'TOP',
  };

  return <PortfolioTemplate metaData={metaData}>IndexPage</PortfolioTemplate>;
};

export default IndexTemplate;
