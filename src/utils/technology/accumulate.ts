import { sums } from '../../../wasm/pkg/wasm_bg.wasm';

export const accumulateWithJs = (
  trial: number,
  number: number,
  outputLogs: boolean,
) => {
  for (let i = 0; i < trial; i++) {
    let a = 0;
    for (let i = 1; i < number + 1; i++) {
      a += i;
    }
    if (outputLogs) {
      console.log(a);
    }
  }
};

export const accumulateWithWasm = (
  trial: number,
  number: number,
  outputLogs: boolean,
) => {
  for (let i = 0; i < trial; i++) {
    const a = sums(number);
    if (outputLogs) {
      console.log(a);
    }
  }
};
