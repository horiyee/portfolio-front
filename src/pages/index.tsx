import { NextPage } from 'next';
import React from 'react';
import IndexTemplate from '../components/templates/IndexTemplate';
import { useSetApiHealth } from '../hooks/apiHealth';
import { ApiHealth } from '../types/apiHealth';
import { healthCheckApiClient } from '../api/clients/healthCheck';

type Props = {
  apiHealth: ApiHealth;
};

const IndexPage: NextPage<Props> = ({ apiHealth }) => {
  if (apiHealth) {
    useSetApiHealth(apiHealth);
  }

  return <IndexTemplate />;
};

export const getServerSideProps = async () => {
  try {
    const res = await healthCheckApiClient();
    const props: Props = {
      apiHealth: res,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: Props = {
      apiHealth: null,
    };

    return { props };
  }
};

export default IndexPage;
