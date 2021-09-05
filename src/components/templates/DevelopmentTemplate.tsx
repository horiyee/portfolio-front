import React from 'react';
import { MetaData } from '../../types';
import PortfolioTemplate from './common/PortfolioTemplate';

const DevelopmentTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'DEVELOPMENT',
  };

  return <PortfolioTemplate metaData={metaData}>Development</PortfolioTemplate>;
};

export default DevelopmentTemplate;
