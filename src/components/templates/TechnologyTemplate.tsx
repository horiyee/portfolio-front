import React from 'react';
import HorizontalLine from '../atoms/HorizontalLine';
import TechnologyDrawingCanvas from '../organisms/technology/DrawingCanvas';
import TechnologyMarkdownEditor from '../organisms/technology/MarkdownEditor';
import TechnologyReactHooks from '../organisms/technology/ReactHooks';
import TechnologyWasm from '../organisms/technology/Wasm';
import PortfolioTemplate from './common/PortfolioTemplate';

const TechnologyTemplate: React.VFC = () => {
  return (
    <PortfolioTemplate>
      <TechnologyDrawingCanvas />
      <HorizontalLine />
      <TechnologyMarkdownEditor />
      <HorizontalLine />
      <TechnologyWasm />
      <HorizontalLine />
      <TechnologyReactHooks />
    </PortfolioTemplate>
  );
};

export default TechnologyTemplate;
