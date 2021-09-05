import React from 'react';
import { paths } from '../../config/paths';
import { MetaData } from '../../types';
import IndexWhatsNew from '../organisms/index/WhatsNew';
import PortfolioTemplate from './common/PortfolioTemplate';

const IndexTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'TOP',
    pagePath: paths.index,
  };

  return (
    <PortfolioTemplate metaData={metaData}>
      <IndexWhatsNew />
    </PortfolioTemplate>
  );
};

export default IndexTemplate;
