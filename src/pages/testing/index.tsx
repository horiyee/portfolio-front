import { Button, DatePicker } from 'antd';
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

  return (
    <Root>
      <label>
        Path:
        <input value={path} onChange={e => setPath(e.target.value)} />
      </label>
      <Button type="primary" onClick={() => callApiClient()}>
        Call API Client
      </Button>

      <br />
      <br />

      <label>
        Result:
        <textarea value={result} onChange={() => {}} />
      </label>

      <br />
      <br />
      <DatePicker />
    </Root>
  );
};

export default TestingPage;
