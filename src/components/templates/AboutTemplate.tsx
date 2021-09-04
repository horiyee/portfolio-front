import React from 'react';
import HorizontalLine from '../atoms/HorizontalLine';
import AboutCareer from '../organisms/about/Career';
import AboutHistory from '../organisms/about/History';
import AboutProfile from '../organisms/about/Profile';
import PortfolioTemplate from './common/PortfolioTemplate';

const AboutTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <AboutProfile />
      <HorizontalLine />
      <AboutCareer />
      <HorizontalLine />
      <AboutHistory />
    </PortfolioTemplate>
  );
};

export default AboutTemplate;
