import React from 'react';
import styled from 'styled-components';
import CheckBox from '../atoms/CheckBox';

type Props = {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const Root = styled.label``;

const StyledCheckBox = styled(CheckBox)`
  margin-right: 8px;

  width: 12px;
  height: 12px;
`;

const LabeledCheckBox: React.VFC<Props> = ({ label, checked, setChecked }) => {
  return (
    <Root>
      <StyledCheckBox value={checked} onChange={setChecked} />
      {label}
    </Root>
  );
};

export default LabeledCheckBox;
