import React from 'react';
import styled from 'styled-components';
import { SelectorOption } from '../../../types';
import AdminFormLabel from '../../atoms/admin/AdminFormLabel';
import Selector from '../../atoms/Selector';

type Props = {
  name?: string;
  options: SelectorOption[];
  value: string;
  setValue: (value: string) => void;
  label: string;
};

const StyledSelector = styled(Selector)`
  display: inline-block;
  width: 100%;
`;

const AdminLabeledSelector: React.VFC<Props> = ({
  name,
  options,
  value,
  setValue,
  label,
}) => {
  return (
    <AdminFormLabel>
      {label}
      <StyledSelector
        name={name}
        options={options}
        value={value}
        setValue={setValue}
      />
    </AdminFormLabel>
  );
};

export default AdminLabeledSelector;
