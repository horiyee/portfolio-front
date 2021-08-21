import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../../atoms/Paragraph';

describe('components/atoms/Paragraph', () => {
  describe('if the component has string children', () => {
    it('render children as it is', () => {
      const component = renderer.create(<Paragraph>p</Paragraph>);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('if the component has React.ReactNode as children', () => {
    it('render React.ReactNode as children', () => {
      const component = renderer.create(
        <Paragraph>
          <a href="https://example.com" id="link">
            Link
          </a>
        </Paragraph>,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('if the component has no children', () => {
    it('render only myself', () => {
      const component = renderer.create(<Paragraph></Paragraph>);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

export {};
