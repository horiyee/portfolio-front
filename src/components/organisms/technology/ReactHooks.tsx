import React, { useCallback, useState } from 'react';
import {
  TechnologyMainContent,
  TechnologyMainContentsWrapper,
} from '../../../styles/components';
import {
  apiClientMultipleCaller,
  useMemorizedApiClientMultipleCaller,
} from '../../../utils/technology/hooks';
import RoundedColorButton from '../../atoms/buttons/RoundedColorButton';
import Paragraph from '../../atoms/Paragraph';
import SecondHeading from '../../atoms/SecondHeading';
import LabeledCheckBox from '../../molecules/LabeledCheckBox';
import Section from '../../molecules/Section';

const TechnologyReactHooks: React.VFC = () => {
  const memorizedApiClientMultipleCaller =
    useMemorizedApiClientMultipleCaller();

  const [outputLogs, setOutputLogs] = useState(false);

  const [arrowResult, setArrowResult] = useState<number | null>(null);
  const [useCallbackResult, setUseCallbackResult] = useState<number | null>(
    null,
  );

  const [arrowExecuted, setArrowExecuted] = useState(false);
  const [useCallbackExecuted, setUseCallbackExecuted] = useState(false);

  const trial = 10000;

  const onClickArrowFunctionButton = async () => {
    setArrowExecuted(true);

    const startTime = performance.now();
    await apiClientMultipleCaller(trial, outputLogs);
    const endTime = performance.now();

    const result = endTime - startTime;
    setArrowResult(result);
    console.log(`arrow function: ${result}ms`);
  };

  const onClickUseCallbackButon = useCallback(async () => {
    setUseCallbackExecuted(true);

    const startTime = performance.now();
    await memorizedApiClientMultipleCaller(trial, outputLogs);
    const endTime = performance.now();

    const result = endTime - startTime;
    setUseCallbackResult(result);
    console.log(`useCallback: ${result}ms`);
  }, [outputLogs]);

  return (
    <Section enHeading="React Hooks" jpHeading="Hooksを理解する" id="hooks">
      <SecondHeading>モックAPIに{trial}回リクエストを投げる</SecondHeading>
      <br />
      <Paragraph>
        for文でモックAPIに10000回リクエストを投げる関数を、普通にアロー関数で実装した場合とuseCallbackでメモ化した場合とで実行時間に差が出るのかどうか検証します。
      </Paragraph>

      <TechnologyMainContentsWrapper>
        <TechnologyMainContent>
          <RoundedColorButton
            onClick={() => onClickArrowFunctionButton()}
            disabled={arrowExecuted}
          >
            アロー関数
          </RoundedColorButton>
          <Paragraph>
            実行時間：{arrowResult ? `${arrowResult}ms` : '未計測'}
          </Paragraph>
        </TechnologyMainContent>

        <TechnologyMainContent>
          <RoundedColorButton
            onClick={() => onClickUseCallbackButon()}
            disabled={useCallbackExecuted}
          >
            useCallback
          </RoundedColorButton>
          <Paragraph>
            実行時間：{useCallbackResult ? `${useCallbackResult}ms` : '未計測'}
          </Paragraph>
        </TechnologyMainContent>
      </TechnologyMainContentsWrapper>

      {/* <Paragraph></Paragraph> */}

      <LabeledCheckBox
        checked={outputLogs}
        setChecked={setOutputLogs}
        label="responseを毎回console.log出力する（かなり高負荷になります）"
      />
    </Section>
  );
};

export default TechnologyReactHooks;
