import React from 'react';
import styled from 'styled-components';

const Root = styled.hr`
  width: 100%;
  height: 1px;
  border-width: 0;
  color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.12);
  margin: 64px 0;
`;

const HorizontalLine: React.VFC = () => {
  return <Root />;
};

export default HorizontalLine;
