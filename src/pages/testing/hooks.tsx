import { NextPage } from 'next';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid ${colors.defaultBlack};
  padding: 2px;
  margin: 2px;
`;

const Input = styled.input``;

const HooksTestingPage: NextPage = () => {
  const [state, setState] = useState('');
  const [number, setNumber] = useState(0);

  console.log('rendered');

  useEffect(() => {
    console.log('useEffect: ', state);
  }, [state]);

  const onClick = useCallback(() => {
    console.log(state);
  }, [state]);

  const result = useMemo(() => {
    return number * 10;
  }, [number]);

  return (
    <Root>
      <Input value={state} onChange={e => setState(e.target.value)} />
      <Button onClick={() => onClick()}>Button</Button>

      <Input
        value={number}
        type="number"
        onChange={e => {
          const n = Number(e.target.value);
          setNumber(isNaN(n) ? 0 : n);
        }}
      />
      <p>{result}</p>
    </Root>
  );
};

export default HooksTestingPage;
