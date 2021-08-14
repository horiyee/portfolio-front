import React from 'react';
import { sums } from '../../../../wasm/pkg/wasm_bg.wasm';
import Section from '../../molecules/Section';

const TechnologyWasm: React.VFC = () => {
  const number = sums(5);
  console.log(number);

  return <Section enHeading="Web Assembly" jpHeading="" id="wasm"></Section>;
};

export default TechnologyWasm;
