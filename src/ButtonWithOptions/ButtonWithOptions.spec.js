import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import buttonWithOptionsDriverFactory from './ButtonWithOptions.driver';
import ButtonWithOptions from './ButtonWithOptions';
import {createDriverFactory} from '../test-common';
import {buttonWithOptionsTestkitFactory} from '../../testkit';
import {buttonWithOptionsTestkitFactory as enzymeButtonWithOptionsTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

const runButtonWithOptionsTest = driverFactory => {
  describe('ButtonWithOptions', () => {

    const createDriver = createDriverFactory(driverFactory);
    const options = [
      {id: 0, value: 'Option 1'},
      {id: 1, value: 'Option 2'},
      {id: 2, value: 'Option 3', disabled: true},
      {id: 3, value: 'Option 4'},
      {id: 'divider1', value: '-'},
      {id: 'element1', value: <span style={{color: 'brown'}}>Option 4</span>}
    ];

    const optionsArray = options.map(option => {
      const {value, ...props} = option;
      return <ButtonWithOptions.Option key={option.id} {...props}>{value}</ButtonWithOptions.Option>;
    });

    const buttonWithOptions = props => (
      <ButtonWithOptions {...props}>
        <ButtonWithOptions.Button
          {...props}
          >
          Test
        </ButtonWithOptions.Button>
        {optionsArray}
      </ButtonWithOptions>
    );

    it('should have a Button and a hidden DropdownLayout by default', () => {
      const {buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions());
      expect(buttonDriver.exists()).toBeTruthy();
      expect(dropdownLayoutDriver.exists()).toBeTruthy();
      expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should show DropdownLayout when Button is clicked', () => {
      const {buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions());
      buttonDriver.click();
      expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    });

    it('should hide options on selection', () => {
      const {buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions());
      buttonDriver.click();
      dropdownLayoutDriver.clickAtOption(0);
      expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should hide options on outside click', () => {
      const {driver, buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions());
      buttonDriver.click();
      expect(dropdownLayoutDriver.isShown()).toBeTruthy();
      driver.outsideClick();
      expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    });

    it('should call onSelect when an option is pressed', () => {
      const onSelect = jest.fn();
      const {buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions({onSelect}));
      buttonDriver.click();
      dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect).toBeCalledWith(options[0]);
    });

    it('should not call onSelect when a selected option is pressed', () => {
      const onSelect = jest.fn();
      const {buttonDriver, dropdownLayoutDriver} = createDriver(buttonWithOptions({onSelect, selectedId: options[0].id}));
      buttonDriver.click();
      dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect).not.toBeCalled();
    });

    describe('appearance', () => {
      it('should be possible to specify the theme of underlying elements', () => {
        const props = {theme: 'emptybluesecondary', dataHook: 'myDataHook'};
        const wrapper = mount(buttonWithOptions(props));
        const testkit = enzymeButtonWithOptionsTestkitFactory({wrapper, dataHook: props.dataHook});
        expect(testkit.dropdownLayoutDriver.hasTheme(props.theme)).toBe(true);
      });
    });

    describe('testkit', () => {
      it('should exist', () => {
        const div = document.createElement('div');
        const dataHook = 'myDataHook';
        const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{buttonWithOptions({dataHook})}</div>));
        const buttonWithOptionsTestkit = buttonWithOptionsTestkitFactory({wrapper, dataHook});
        expect(buttonWithOptionsTestkit.driver.exists()).toBeTruthy();
        expect(buttonWithOptionsTestkit.buttonDriver.exists()).toBeTruthy();
        expect(buttonWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      });
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(buttonWithOptions({dataHook}));
        const buttonWithOptionsTestkit = enzymeButtonWithOptionsTestkitFactory({wrapper, dataHook});
        expect(buttonWithOptionsTestkit.driver.exists()).toBeTruthy();
        expect(buttonWithOptionsTestkit.buttonDriver.exists()).toBeTruthy();
        expect(buttonWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
      });
    });
    
    describe('Dynamic button theme', () => {
      let theme, props, wrapper, testkit, option;
      
      beforeEach(() => {
        option = options[0];
        theme = 'no-border';
        props = {theme, dataHook: 'myDataHook', selectedId: option.id};
        wrapper = mount(buttonWithOptions(props));
        testkit = enzymeButtonWithOptionsTestkitFactory({wrapper, dataHook: props.dataHook});
      });
     
      it('button should display the same value as the "selected" option', () => {
        expect(testkit.buttonDriver.getButtonTextContent()).toEqual(option.value);
      });

      it('button should display the same value as the "selected" option that has span', () => {
        const expectedValue = 'Option 4';
        option = options[5];
        props = {theme, dataHook: 'myDataHook', selectedId: option.id};
        wrapper = mount(buttonWithOptions(props));
        testkit = enzymeButtonWithOptionsTestkitFactory({wrapper, dataHook: props.dataHook});
        expect(testkit.buttonDriver.getButtonTextContent()).toEqual(expectedValue);
      });
    });
  });
};

runButtonWithOptionsTest(buttonWithOptionsDriverFactory);

export {runButtonWithOptionsTest};
