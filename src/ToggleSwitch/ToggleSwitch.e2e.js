import eyes from 'eyes.it';
import {toggleSwitchTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('toggle switch page', () => {
  const storyUrl = getStoryUrl('Core', 'ToggleSwitch');
  const toggleSwitchDriver = toggleSwitchTestkitFactory({dataHook: 'storybook-toggleswitch'});

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should render x-small toggle switch', () => {
    autoExampleDriver.setProps({size: 'x-small'});

    waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch')
      .then(() => expect(toggleSwitchDriver.isXSmall()).toBe(true));
  });

  eyes.it('should render small toggle switch', () => {
    autoExampleDriver.setProps({size: 'small'});

    waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch')
      .then(() => expect(toggleSwitchDriver.isSmall()).toBe(true));
  });

  eyes.it('should render large switch', () => {
    autoExampleDriver.setProps({size: 'large'});

    waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch')
      .then(() => expect(toggleSwitchDriver.isLarge()).toBe(true));
  });

  eyes.it('should change state on click', () => {
    waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch')
      .then(() => {
        expect(toggleSwitchDriver.checked()).toBe(false);
        toggleSwitchDriver.click();
        expect(toggleSwitchDriver.checked()).toBe(true);
      });
  });

});
