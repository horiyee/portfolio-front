import React from 'react';
import styled from 'styled-components';
import AdminFormLabel from '../../atoms/admin/AdminFormLabel';
import Input from '../../atoms/Input';

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
};

const StyledInput = styled(Input)`
  width: 100%;
`;

const AdminLabeledInput: React.VFC<Props> = ({
  label,
  value,
  setValue,
  type,
}) => {
  return (
    <AdminFormLabel>
      {label}
      <StyledInput value={value} onChange={setValue} type={type} />
    </AdminFormLabel>
  );
};

export default AdminLabeledInput;
