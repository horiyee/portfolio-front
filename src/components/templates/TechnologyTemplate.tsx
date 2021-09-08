import React from 'react';
import styled from 'styled-components';
import { paths } from '../../config/paths';
import { mqPc } from '../../styles/mixins';
import { MetaData } from '../../types';
import HorizontalLine from '../atoms/HorizontalLine';
import TechnologyDrawingCanvas from '../organisms/technology/DrawingCanvas';
import TechnologyMarkdownEditor from '../organisms/technology/MarkdownEditor';
import TechnologyReactHooks from '../organisms/technology/ReactHooks';
import TechnologyWasm from '../organisms/technology/Wasm';
import PortfolioTemplate from './common/PortfolioTemplate';

const DrawingCanvasWrapper = styled.div`
  display: none;
  ${mqPc(`display: initial;`)}
`;

const TechnologyTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'TECHNOLOGY',
    pagePath: paths.technology,
  };

  return (
    <PortfolioTemplate metaData={metaData}>
      <DrawingCanvasWrapper>
        <TechnologyDrawingCanvas />
        <HorizontalLine />
      </DrawingCanvasWrapper>

      <TechnologyReactHooks />
      <HorizontalLine />
      <TechnologyWasm />
      <HorizontalLine />
      <TechnologyMarkdownEditor />
    </PortfolioTemplate>
  );
};

export default TechnologyTemplate;
