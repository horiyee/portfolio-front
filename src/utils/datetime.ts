const invalidDateString = 'Invalid Date';

export const getLocaleString = (datetime: string) => {
  const d = new Date(datetime);
  const localeString = d.toLocaleString();

  if (localeString === invalidDateString) {
    return '';
  }

  return localeString;
};

export const getLocaleDateString = (datetime: string) => {
  const d = new Date(datetime);
  const localeDateString = d.toLocaleDateString();

  if (localeDateString === invalidDateString) {
    return '';
  }

  return localeDateString;
};

export const getISOString = (datetime: string) => {
  const d = new Date(datetime);
  const ISOString = d.toISOString();

  if (ISOString === invalidDateString) {
    return '';
  }

  return ISOString;
};
