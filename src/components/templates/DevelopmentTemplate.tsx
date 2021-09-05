import React from 'react';
import { paths } from '../../config/paths';
import { MetaData } from '../../types';
import PortfolioTemplate from './common/PortfolioTemplate';

const DevelopmentTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'DEVELOPMENT',
    pagePath: paths.development,
  };

  return <PortfolioTemplate metaData={metaData}>Development</PortfolioTemplate>;
};

export default DevelopmentTemplate;
