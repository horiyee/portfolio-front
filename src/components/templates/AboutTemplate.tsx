import React from 'react';
import Section from '../molecules/Section';
import PortfolioTemplate from './common/PortfolioTemplate';

const AboutTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <Section enHeading="Profile" jpHeading="自己紹介" id="profile"></Section>
      <Section enHeading="Career" jpHeading="経歴" id="career"></Section>
      <Section enHeading="History" jpHeading="来歴" id="history"></Section>
    </PortfolioTemplate>
  );
};

export default AboutTemplate;
