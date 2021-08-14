import React from 'react';
import styled from 'styled-components';
import FirstHeading from '../atoms/FirstHeading';

type Props = {
  children?: React.ReactNode;
  enHeading: string;
  jpHeading: string;
  id: string;
};

const Root = styled.section``;

const StyledFirstHeading = styled(FirstHeading)`
  margin-bottom: 32px;
`;

const Section: React.VFC<Props> = ({ children, enHeading, jpHeading, id }) => {
  return (
    <Root id={id}>
      <StyledFirstHeading enHeading={enHeading} jpHeding={jpHeading} />
      {children}
    </Root>
  );
};

export default Section;
