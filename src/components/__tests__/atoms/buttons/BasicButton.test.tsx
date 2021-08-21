import React from 'react';
import renderer from 'react-test-renderer';
import BasicButton from '../../../atoms/buttons/BasicButton';

describe('components/atoms/buttons/BasicButton', () => {
  describe('if the component has string children', () => {
    it('render children as it is', () => {
      const component = renderer.create(
        <BasicButton onClick={() => {}}>Button</BasicButton>,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
