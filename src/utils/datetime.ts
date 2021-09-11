export const invalidDateString = 'Invalid Date';

export const getLocaleDateString = (datetime: Date) => {
  const localeDateString = datetime.toLocaleDateString();

  if (localeDateString === invalidDateString) {
    return '';
  }

  return localeDateString;
};

export const getLocaleString = (datetime: Date) => {
  const localeString = datetime.toLocaleString();

  if (localeString === invalidDateString) {
    return '';
  }

  return localeString;
};

export const getISOString = (datetime: Date) => {
  const ISOString = datetime.toISOString();

  if (ISOString === invalidDateString) {
    return '';
  }

  return ISOString;
};
