import axios from 'axios';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { envVariables } from '../../config/envVariables';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const TestingPage: NextPage = () => {
  const [path, setPath] = useState('/');
  const [result, setResult] = useState('');

  const callApiClient = useCallback(async () => {
    const url = `${envVariables.API_BASE_URL}${path}`;

    console.log(url);

    try {
      const res = await axios(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(res);
      setResult(JSON.stringify(res.data));
    } catch (e) {
      console.error(e);
    }
  }, [path]);

  const mockApiClient = async (): Promise<{ hoge: string }> => {
    // const successCallback = useCallback(async () => {}, []);

    // const rejectCallback = useCallback(async () => {}, []);

    const promise = new Promise<{ hoge: string }>((resolve, reject) => {
      // resolve({ hoge: 'hoge' });
      reject('hogehoge');
    });

    return promise;
  };

  const onClickMock = useCallback(async () => {
    try {
      const res = await mockApiClient();
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Root>
      <label>
        Path:
        <input value={path} onChange={e => setPath(e.target.value)} />
      </label>
      <button onClick={() => callApiClient()}>Call API Client</button>

      <br />
      <br />

      <label>
        Result:
        <textarea value={result} onChange={() => {}} />
      </label>

      <button onClick={() => onClickMock()}>mock</button>
    </Root>
  );
};

export default TestingPage;
