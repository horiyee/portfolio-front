import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sums } from '../../../../wasm/pkg/wasm_bg.wasm';
import { mqSp } from '../../../styles/mixins';
import RoundedColorButton from '../../atoms/buttons/RoundedColorButton';
import Paragraph from '../../atoms/Paragraph';
import ResponsiveBreak from '../../atoms/ResponsiveBreak';
import SecondHeading from '../../atoms/SecondHeading';
import LabeledCheckBox from '../../molecules/LabeledCheckBox';
import Section from '../../molecules/Section';

const MainContentsWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 32px 0;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mqSp(`
    flex-direction: column;
    align-items: flex-start;
  `)}

  width: 100%;
  padding: 8px 0;
`;

const TechnologyWasm: React.VFC = () => {
  const [wasmResult, setWasmResult] = useState<number | null>(null);
  const [jsResult, setJsResult] = useState<number | null>(null);

  const [wasmCalculated, setWasmCalculated] = useState(false);
  const [jsCalculated, setJsCalculated] = useState(false);

  const [outputLogs, setOutputLogs] = useState(false);

  const trial = 10000;
  const number = 10 ** 4;

  useEffect(() => {
    if (wasmResult) {
      console.log(`wasm: ${wasmResult}ms`);
    }
  }, [wasmResult]);

  useEffect(() => {
    if (jsResult) {
      console.log(`js: ${jsResult}ms`);
    }
  }, [jsResult]);

  const calculateWithWasm = () => {
    setWasmCalculated(true);

    const startTime = performance.now();
    for (let i = 0; i < trial; i++) {
      const a = sums(number);
      if (outputLogs) {
        console.log(a);
      }
    }
    const endTime = performance.now();

    const result = endTime - startTime;
    setWasmResult(result);
  };

  const calculateWithJs = () => {
    setJsCalculated(true);

    const startTime = performance.now();
    for (let i = 0; i < trial; i++) {
      let a = 0;
      for (let i = 1; i < number + 1; i++) {
        a += i;
      }
      if (outputLogs) {
        console.log(a);
      }
    }
    const endTime = performance.now();

    const result = endTime - startTime;
    setJsResult(result);
  };

  return (
    <Section enHeading="WebAssembly" jpHeading="Wasmでの高速処理" id="wasm">
      <SecondHeading>
        1から10000までの累積和を
        <ResponsiveBreak sp />
        for文で10000回求める
      </SecondHeading>

      <MainContentsWrapper>
        <MainContent>
          <RoundedColorButton
            onClick={() => calculateWithWasm()}
            disabled={wasmCalculated}
          >
            Wasmで計算
          </RoundedColorButton>
          <Paragraph>
            実行時間：{wasmResult ? `${wasmResult}ms` : '未計測'}
          </Paragraph>
        </MainContent>
        <MainContent>
          <RoundedColorButton
            onClick={() => calculateWithJs()}
            disabled={jsCalculated}
          >
            JavaScriptで計算
          </RoundedColorButton>
          <Paragraph>
            実行時間：{jsResult ? `${jsResult}ms` : '未計測'}
          </Paragraph>
        </MainContent>
      </MainContentsWrapper>

      <LabeledCheckBox
        checked={outputLogs}
        setChecked={setOutputLogs}
        label="計算結果を毎回console.log出力する（かなり高負荷になります）"
      />
    </Section>
  );
};

export default TechnologyWasm;
