import React, { useCallback, useMemo, useState } from 'react';
import { sums } from '../../../../wasm/pkg/wasm_bg.wasm';
import RoundedColorButton from '../../atoms/buttons/RoundedColorButton';
import Paragraph from '../../atoms/Paragraph';
import Section from '../../molecules/Section';

const TechnologyWasm: React.VFC = () => {
  const [wasmResults, setWasmResult] = useState<number[]>([]);
  const [jsResults, setJsResult] = useState<number[]>([]);

  const number = 10 ** 4;

  console.log(wasmResults, jsResults);

  const calculateWithWasm = () => {
    const startTime = performance.now();
    const result = sums(number);
    const endTime = performance.now();

    const ms = endTime - startTime;
    console.log(result, ms);
    setWasmResult([...wasmResults, ms]);
  };

  const calculateWithJs = () => {
    const startTime = performance.now();
    let a = 0;
    for (let i = 0; i < number + 1; i++) {
      a += i;
    }
    const endTime = performance.now();

    const ms = endTime - startTime;
    console.log(a, ms);
    setJsResult([...jsResults, ms]);
  };

  const getAverage = useCallback((numbers: number[]) => {
    if (numbers.length === 0) {
      return 0;
    }

    let a = 0;
    numbers.forEach(n => {
      a += n;
    });

    return a / numbers.length;
  }, []);

  return (
    <Section enHeading="WebAssembly" jpHeading="Wasmでの高速処理" id="wasm">
      <Paragraph>1から10000までの累積和をfor文で求める</Paragraph>
      <RoundedColorButton onClick={() => calculateWithWasm()}>
        Wasmで計算
      </RoundedColorButton>
      <p>{getAverage(wasmResults)}ms</p>
      <RoundedColorButton onClick={() => calculateWithJs()}>
        JavaScriptで計算
      </RoundedColorButton>
      <p>{getAverage(jsResults)}ms</p>
    </Section>
  );
};

export default TechnologyWasm;
