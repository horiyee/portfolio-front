type MockedAxiosArgs = {
  res: any | undefined;
  err: Error | undefined;
};

const mockedAxios = (args: MockedAxiosArgs) => {
  return new Promise((resolve, reject) => {
    if (args.res) {
      resolve(args.res);
      return;
    }
    if (args.err) {
      reject(args.err);
    }
  });
};

export default mockedAxios;
