import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { envVariables } from '../../config/envVariables';
import { colors } from '../../styles/variables';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid ${colors.defaultBlack};
`;

const TestingPage: NextPage = () => {
  const callApiClient = async () => {
    const url = `${envVariables.API_BASE_URL}/cors_all_allow`;

    console.log(url);
    const res = await axios(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    console.log(res.data);
  };

  return (
    <Root>
      <Button onClick={() => callApiClient()}>Call API Client</Button>
    </Root>
  );
};

export default TestingPage;
