import eyes from 'eyes.it';
import {checkboxTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.2 Checkbox');
  const checkboxDriver = checkboxTestkitFactory({dataHook: 'storybook-checkbox'});

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it('should toggle state when clicked', () => {
    waitForVisibilityOf(checkboxDriver.element(), 'Cannot find Checkbox')
      .then(() => {
        autoExampleDriver.setProps({checked: true});
        expect(checkboxDriver.isChecked()).toBe(true);

        autoExampleDriver.setProps({checked: false});
        expect(checkboxDriver.isChecked()).toBe(false);
      });
  });
});
