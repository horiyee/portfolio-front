import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import BasicButton from '../buttons/BasicButton';
import ClearIcon from '../icons/ClearIcon';

type Props = {
  pathToBack: string;
  children?: React.ReactNode;
};

const Root = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const AdminCancelButton: React.VFC<Props> = ({ pathToBack, children }) => {
  const router = useRouter();

  return (
    <Root onClick={() => router.push(pathToBack)} icon={<ClearIcon />}>
      {children}
    </Root>
  );
};

export default AdminCancelButton;
