import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import toggleSwitchDriverFactory from './ToggleSwitch.driver';
import {createDriverFactory} from '../test-common';
import {toggleSwitchTestkitFactory} from '../../testkit';
import ToggleSwitch from './ToggleSwitch';
import {toggleSwitchTestkitFactory as enzymeToggleSwitchTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('ToggleSwitch', () => {
  const noop = () => {};
  const createDriver = createDriverFactory(toggleSwitchDriverFactory);

  describe('checked attribute', () => {
    it('should pass down to input', () => {
      const driver = createDriver(<ToggleSwitch checked onChange={noop}/>);
      expect(driver.isChecked()).toBeTruthy();
    });

    it('should pass down to input', () => {
      const driver = createDriver(<ToggleSwitch checked={false} onChange={noop}/>);
      expect(driver.isChecked()).toBeFalsy();
    });
  });

  describe('onChange attribute', () => {
    it('should be called when the input is clicked', () => {
      const onChange = jest.fn();
      const driver = createDriver(<ToggleSwitch checked={false} onChange={onChange}/>);

      driver.click();
      expect(onChange).toBeCalled();
    });
  });

  describe('disabled attribute', () => {
    it('should not be disabled by default', () => {
      const driver = createDriver(<ToggleSwitch onChange={noop}/>);
      expect(driver.isDisabled()).toBe(false);
    });

    it('should not be clickable when disabled and unchecked', () => {
      const onChange = jest.fn();
      const driver = createDriver(<ToggleSwitch checked={false} onChange={onChange} disabled/>);
      driver.click();
      expect(onChange).toHaveBeenCalledTimes(0);
      expect(driver.isChecked()).toBe(false);
    });

    it('should not be clickable when disabled and checked', () => {
      const onChange = jest.fn();
      const driver = createDriver(<ToggleSwitch checked onChange={onChange} disabled/>);
      driver.click();
      expect(onChange).toHaveBeenCalledTimes(0);
      expect(driver.isChecked()).toBe(true);
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><ToggleSwitch dataHook={dataHook} onChange={noop}/></div>));
      const toggleSwitchTestkit = toggleSwitchTestkitFactory({wrapper, dataHook});
      expect(toggleSwitchTestkit.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<ToggleSwitch dataHook={dataHook} onChange={noop}/>);
      const toggleSwitchTestkit = enzymeToggleSwitchTestkitFactory({wrapper, dataHook});
      expect(toggleSwitchTestkit.exists()).toBeTruthy();
    });
  });
});
