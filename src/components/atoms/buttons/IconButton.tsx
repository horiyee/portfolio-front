import React from 'react';
import styled from 'styled-components';

type Props = {
  icon: React.ReactNode;
  onClick: () => void;
};

const Root = styled.button``;

const IconButton: React.VFC<Props> = ({ icon, onClick }) => {
  return <Root onClick={() => onClick()}>{icon}</Root>;
};

export default IconButton;
