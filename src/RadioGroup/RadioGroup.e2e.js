import eyes from 'eyes.it';
import {radioGroupTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('RadioGroup', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.3 Radio Button Group');
  const dataHook = 'storybook-radiogroup';
  const radioGroupDriver = radioGroupTestkitFactory({dataHook});

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should select the second option in a group', () => {
    waitForVisibilityOf(radioGroupDriver.element(), 'Cannot find RadioGroup')
      .then(() => {
        radioGroupDriver.selectByIndex(1).click();
        expect(radioGroupDriver.isRadioChecked(1)).toBe(true);
      });
  });

  eyes.it('should not select disabled option', () => {
    autoExampleDriver.setProps({disabledRadios: [4]});

    waitForVisibilityOf(radioGroupDriver.element(), 'Cannot find RadioGroup')
      .then(() => {
        expect(radioGroupDriver.isRadioDisabled(3)).toBe(true);
        browser.actions().mouseMove(radioGroupDriver.getRadioAtIndex(3)).click();
        expect(radioGroupDriver.isRadioChecked(3)).toBe(false);
      });
  });
});
