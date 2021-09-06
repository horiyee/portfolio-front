import React, { useEffect, useState } from 'react';
import {
  TechnologyMainContent,
  TechnologyMainContentsWrapper,
} from '../../../styles/components';
import {
  accumulateWithJs,
  accumulateWithWasm,
} from '../../../utils/technology/accumulate';
import RoundedColorButton from '../../atoms/buttons/RoundedColorButton';
import Paragraph from '../../atoms/Paragraph';
import ResponsiveBreak from '../../atoms/ResponsiveBreak';
import SecondHeading from '../../atoms/SecondHeading';
import LabeledCheckBox from '../../molecules/LabeledCheckBox';
import Section from '../../molecules/Section';

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
    accumulateWithWasm(trial, number, outputLogs);
    const endTime = performance.now();

    const result = endTime - startTime;
    setWasmResult(result);
  };

  const calculateWithJs = () => {
    setJsCalculated(true);

    const startTime = performance.now();
    accumulateWithJs(trial, number, outputLogs);
    const endTime = performance.now();

    const result = endTime - startTime;
    setJsResult(result);
  };

  return (
    <Section enHeading="WebAssembly" jpHeading="Wasmでの高速処理" id="wasm">
      <SecondHeading>
        1から{number}までの累積和を
        <ResponsiveBreak sp />
        for文で{trial}回求める
      </SecondHeading>
      <br />
      <Paragraph>
        for文で累積和を求める関数をJSとWebAssembly(Rust)とでそれぞれ実装し、実行時間を比較します。
      </Paragraph>

      <TechnologyMainContentsWrapper>
        <TechnologyMainContent>
          <RoundedColorButton
            onClick={() => calculateWithWasm()}
            disabled={wasmCalculated}
          >
            Wasmで計算
          </RoundedColorButton>
          <Paragraph>
            実行時間：{wasmResult ? `${wasmResult}ms` : '未計測'}
          </Paragraph>
        </TechnologyMainContent>
        <TechnologyMainContent>
          <RoundedColorButton
            onClick={() => calculateWithJs()}
            disabled={jsCalculated}
          >
            JavaScriptで計算
          </RoundedColorButton>
          <Paragraph>
            実行時間：{jsResult ? `${jsResult}ms` : '未計測'}
          </Paragraph>
        </TechnologyMainContent>
      </TechnologyMainContentsWrapper>

      <LabeledCheckBox
        checked={outputLogs}
        setChecked={setOutputLogs}
        label="計算結果を毎回console.log出力する（かなり高負荷になります）"
      />
    </Section>
  );
};

export default TechnologyWasm;
