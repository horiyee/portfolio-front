import { useRouter } from 'next/router';
import React from 'react';
import BasicButton from '../buttons/BasicButton';
import ArrowBackIcon from '../icons/ArrowBackIcon';

type Props = {
  pathToBack: string;
  children?: React.ReactNode;
};

const AdminBackButton: React.VFC<Props> = ({ pathToBack, children }) => {
  const router = useRouter();

  return (
    <BasicButton
      onClick={() => router.push(pathToBack)}
      icon={<ArrowBackIcon />}
    >
      {children}
    </BasicButton>
  );
};

export default AdminBackButton;
