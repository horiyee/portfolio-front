import React from 'react';
import styled from 'styled-components';
import { classes } from '../../utils/classes';
import { getLocaleDateString, getLocaleString } from '../../utils/datetime';

type Props = {
  datetime: string;
  className?: string;
  dateOnly?: boolean;
  seperateWithPeriod?: boolean;
};

const Root = styled.time``;

const Time: React.VFC<Props> = ({
  datetime,
  className,
  dateOnly,
  seperateWithPeriod,
}) => {
  const localeString = getLocaleString(datetime);
  const localeDateString = getLocaleDateString(datetime);

  const dateString = dateOnly ? localeDateString : localeString;

  const displayDatetime = seperateWithPeriod
    ? dateString.replace(/\//g, '.')
    : dateString;

  return (
    <Root dateTime={localeString} className={classes(className)}>
      {displayDatetime}
    </Root>
  );
};

export default Time;
