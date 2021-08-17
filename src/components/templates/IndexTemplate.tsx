import React from 'react';
import { useRecoilValue } from 'recoil';
import { apiHealthState } from '../../recoil/atoms/apiHealth';
import PortfolioTemplate from './common/PortfolioTemplate';

const IndexTemplate: React.VFC = () => {
  const apiHealth = useRecoilValue(apiHealthState);
  console.log(apiHealth);

  return <PortfolioTemplate>IndexPage</PortfolioTemplate>;
};

export default IndexTemplate;
