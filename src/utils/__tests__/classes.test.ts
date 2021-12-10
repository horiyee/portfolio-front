import { classes } from '../classes';

describe('utils/classes', () => {
  describe('if all of arguments are string value', () => {
    it('join them', () => {
      expect(classes('hoge', 'fuga')).toBe('hoge fuga');
    });
  });

  describe('if arguments includes logical values', () => {
    it('join only string values', () => {
      expect(classes('hoge', null, undefined, 'fuga')).toBe('hoge fuga');
    });
  });
});
