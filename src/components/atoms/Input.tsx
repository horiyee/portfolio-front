import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { colors } from '../../styles/variables';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type?: string;
};

const Root = styled.input`
  border: 1px solid ${colors.borderBlack};
  border-radius: 8px;

  padding: 8px;
`;

const Input: React.VFC<Props> = ({ value, onChange, className, type }) => {
  return (
    <Root
      className={classes(className)}
      value={value}
      onChange={e => onChange(e.target.value)}
      type={type}
    />
  );
};

export default Input;
