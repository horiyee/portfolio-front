import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { colors } from '../../styles/variables';
import { SelectorOption } from '../../types';

type Props = {
  name?: string;
  options: SelectorOption[];
  value: string;
  setValue: (value: string) => void;
  className?: string;
};

const Root = styled.select`
  border: 1px solid ${colors.borderBlack};
  border-radius: 8px;

  padding: 8px;
`;

const Option = styled.option``;

const Selector: React.VFC<Props> = ({
  name,
  options,
  value,
  setValue,
  className,
}) => {
  return (
    <Root
      name={name}
      value={value}
      onChange={e => setValue(e.target.value)}
      className={classes(className)}
    >
      {options.map((option, index) => (
        <Option value={option.value} key={index}>
          {option.label}
        </Option>
      ))}
    </Root>
  );
};

export default Selector;
