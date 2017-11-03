import React from 'react';
import {string, object} from 'prop-types';
import {mount} from 'enzyme';
import WixStyleProvider from './index';

const Component = (props, context) => (
  <div id="component">
    {`Theme is ${context.theme} and color is ${context.wixTpaStyles.color}`}
  </div>
);

Component.contextTypes = {
  theme: string,
  wixTpaStyles: object
};


describe('WixStyleProvider', () => {
  it('should render the wrapped component with the correct props and context', () => {
    const theme = 'backoffice';
    const color = 'green';
    const children = `Theme is ${theme} and color is ${color}`;

    const wrapper = mount(
      <WixStyleProvider theme={theme} wixTpaStyles={{color}}>
        <Component/>
      </WixStyleProvider>
      );

    expect(wrapper.html()).toBe(`<div id="component">${children}</div>`);
    expect(wrapper.text()).toBe(children);
  });

  it('should have core theme by default', () => {
    const color = 'green';

    const wrapper = mount(
      <WixStyleProvider wixTpaStyles={{color}}>
        <Component/>
      </WixStyleProvider>
      );

    expect(wrapper.text()).toBe(`Theme is core and color is ${color}`);
  });

  it('should have empty wixTpaStyles object by default', () => {
    const wrapper = mount(
      <WixStyleProvider theme="deviantArt">
        <Component/>
      </WixStyleProvider>
      );

    expect(wrapper.text()).toBe('Theme is deviantArt and color is undefined');
  });
});
