/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../components/Link';

describe('examples/Link', () => {
  it('renders node with correct class name', () => {
    const props = {
      active: true,
      children: {},
      onClick: jest.fn(),
    };
    const renderedComponent = shallow(<Link {...props} />);

    expect(renderedComponent.find('button').length).toBe(1);
  });

  it('counter actions are called when buttons clicked', () => {
    const pageProps = {
      active: true,
      children: {},
      onClick: jest.fn(),
    };
    const renderedComponent = shallow(
      <Link {...pageProps} />
    );
    renderedComponent.find('button').simulate('click');
    expect(pageProps.actions.counterPlusOne.mock.calls.length).toBe(1);
  });
});