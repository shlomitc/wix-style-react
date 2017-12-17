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

  eyes.it('should change state on click', () => {
    waitForVisibilityOf(toggleSwitchDriver.element(), 'Cant find ToggleSwitch')
      .then(() => {
        expect(toggleSwitchDriver.checked()).toBe(false);
        toggleSwitchDriver.click();
        expect(toggleSwitchDriver.checked()).toBe(true);
      });
  });

});
