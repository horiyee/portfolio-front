import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  className?: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const Root = styled.input``;

const CheckBox: React.VFC<Props> = ({ className, value, onChange }) => {
  return (
    <Root
      className={classes(className)}
      type="checkbox"
      checked={value}
      onChange={() => onChange(!value)}
    />
  );
};

export default CheckBox;
