import * as wasm from './wasm_bg.wasm';

/**
 * @param {number} value
 * @returns {number}
 */
export function sums(value) {
  var ret = wasm.sums(value);
  return ret;
}
