import React from 'react';
import { paths } from '../../config/paths';
import { MobilePageTitle } from '../../styles/components';
import { MetaData } from '../../types';
import PortfolioTemplate from './common/PortfolioTemplate';

const DevelopmentTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'DEVELOPMENT',
    pagePath: paths.development,
  };

  return (
    <PortfolioTemplate metaData={metaData}>
      {/* <MobilePageTitle>Development</MobilePageTitle> */}
      <MobilePageTitle>Coming soon...</MobilePageTitle>
    </PortfolioTemplate>
  );
};

export default DevelopmentTemplate;
