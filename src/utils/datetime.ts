export const getLocaleDateString = (datetime: Date) => {
  const localeDateString = datetime.toLocaleDateString();

  if (localeDateString === 'Invalid Date') {
    return '';
  }

  return localeDateString;
};
