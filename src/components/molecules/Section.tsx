import React from 'react';
import styled from 'styled-components';
import { classes } from '../../utils/classes';
import FirstHeading from '../atoms/FirstHeading';

type Props = {
  children?: React.ReactNode;
  enHeading: string;
  jpHeading: string;
  id: string;
  className?: string;
};

const Root = styled.section`
  display: inline-block;
  width: 100%;
`;

const StyledFirstHeading = styled(FirstHeading)`
  margin-bottom: 32px;
`;

const Section: React.VFC<Props> = ({
  children,
  enHeading,
  jpHeading,
  id,
  className,
}) => {
  return (
    <Root id={id} className={classes(className)}>
      <StyledFirstHeading enHeading={enHeading} jpHeding={jpHeading} />
      {children}
    </Root>
  );
};

export default Section;
