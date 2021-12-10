export const classes = (...args: (string | undefined | null)[]) => {
  return args.filter(Boolean).join(' ');
};
