import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const Root = styled.label`
  line-height: 2;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const AdminLabeledInput: React.VFC<Props> = ({ label, value, setValue }) => {
  return (
    <Root>
      {label}
      <StyledInput value={value} onChange={setValue} />
    </Root>
  );
};

export default AdminLabeledInput;
