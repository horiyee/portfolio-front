import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../../atoms/icons/Icon';
import SendIcon from '../../../atoms/icons/SendIcon';

describe('components/atoms/icons/Icon', () => {
  describe('if the components has svg icon', () => {
    it('render svg icon as children', () => {
      const component = renderer.create(<Icon icon={<SendIcon />} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('if the props `icon` is null', () => {
    it('render only myself', () => {
      const component = renderer.create(<Icon icon={null} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
