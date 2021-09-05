import React from 'react';
import { paths } from '../../config/paths';
import { MetaData } from '../../types';
import HorizontalLine from '../atoms/HorizontalLine';
import AboutCareer from '../organisms/about/Career';
import AboutHistory from '../organisms/about/History';
import AboutProfile from '../organisms/about/Profile';
import PortfolioTemplate from './common/PortfolioTemplate';

const AboutTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'ABOUT',
    pagePath: paths.about,
  };

  return (
    <PortfolioTemplate metaData={metaData}>
      <AboutProfile />
      <HorizontalLine />
      <AboutCareer />
      <HorizontalLine />
      <AboutHistory />
    </PortfolioTemplate>
  );
};

export default AboutTemplate;
