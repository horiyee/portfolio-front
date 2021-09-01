export const getLocaleDateString = (datetime: Date) => {
  const localeDateString = datetime.toLocaleDateString();

  if (localeDateString === 'Invalid Date') {
    return '';
  }

  return localeDateString;
};

export const getLocaleString = (datetime: Date) => {
  const localeString = datetime.toLocaleString();

  if (localeString === 'Invalid Date') {
    return '';
  }

  return localeString;
};
