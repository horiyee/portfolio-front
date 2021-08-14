import React from 'react';
import styled from 'styled-components';
import { colors, fontFamilies } from '../../styles/variables';
import { classes } from '../../utils/classes';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Root = styled.input`
  border: 1px solid ${colors.defaultBlack};
  border-radius: 8px;

  padding: 8px;
`;

const Input: React.VFC<Props> = ({ value, onChange, className }) => {
  return (
    <Root
      className={classes(className)}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Input;
