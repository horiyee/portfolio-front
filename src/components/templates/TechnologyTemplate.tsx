import React from 'react';
import Section from '../molecules/Section';
import PortfolioTemplate from './common/PortfolioTemplate';

const TechnologyTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <Section
        enHeading="Drawing Canvas"
        jpHeading="描画キャンバス"
        id="canvas"
      ></Section>
      <Section
        enHeading="Markdown Editor"
        jpHeading="マークダウンエディタ"
        id="canvas"
      ></Section>
    </PortfolioTemplate>
  );
};

export default TechnologyTemplate;
