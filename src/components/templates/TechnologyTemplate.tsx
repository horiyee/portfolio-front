import React from 'react';
import HorizontalLine from '../atoms/HorizontalLine';
import TechnologyDrawingCanvas from '../organisms/technology/DrawingCanvas';
import TechnologyMarkdownEditor from '../organisms/technology/MarkdownEditor';
import TechnologyReactHooks from '../organisms/technology/ReactHooks';
import PortfolioTemplate from './common/PortfolioTemplate';

const TechnologyTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <TechnologyDrawingCanvas />
      <HorizontalLine />
      <TechnologyMarkdownEditor />
      <HorizontalLine />
      <TechnologyReactHooks />
    </PortfolioTemplate>
  );
};

export default TechnologyTemplate;
