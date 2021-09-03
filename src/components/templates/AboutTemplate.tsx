import React from 'react';
import HorizontalLine from '../atoms/HorizontalLine';
import Section from '../molecules/Section';
import AboutProfile from '../organisms/about/Profile';
import PortfolioTemplate from './common/PortfolioTemplate';

const AboutTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <AboutProfile />
      <HorizontalLine />
      <Section enHeading="Career" jpHeading="経歴" id="career"></Section>
      <Section enHeading="History" jpHeading="来歴" id="history"></Section>
    </PortfolioTemplate>
  );
};

export default AboutTemplate;
