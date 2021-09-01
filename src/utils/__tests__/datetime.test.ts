import { getLocaleDateString } from '../datetime';

describe('utils/datetime', () => {
  describe('getLocaleDateString', () => {
    describe('if the function called with the datetime argument', () => {
      it('convert to string date', () => {
        const d = new Date(2021, 8, 1, 13, 1);
        expect(getLocaleDateString(d)).toBe('2021/9/1');
      });
    });

    describe('if the function called with the invalid datetime argument', () => {
      it('return empty string', () => {
        const d = new Date('hoge');
        expect(getLocaleDateString(d)).toBe('');
      });
    });
  });
});
