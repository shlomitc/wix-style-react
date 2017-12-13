import eyes from 'eyes.it';
import {badgeTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Badge', () => {
  const storyUrl = getStoryUrl('Core', 'Badge');
  const badgeDriver = badgeTestkitFactory({dataHook: 'storybook-badge'});

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should render given valid props', () => {
    autoExampleDriver.setProps({appearance: 'H2', type: 'primary', children: 'Primary H2'});

    waitForVisibilityOf(badgeDriver.element(), 'Cannot find <Badge/>')
      .then(() => {
        expect(badgeDriver.text()).toBe('Primary H2');
        expect(badgeDriver.isBadge()).toBe(true);
        expect(badgeDriver.isOfType('primary')).toBe(true);
        expect(badgeDriver.isOfAppearance('H2')).toBe(true);
        expect(badgeDriver.isOfAlignment('middle')).toBe(true);
        expect(badgeDriver.isOfShape('ellipse')).toBe(true);
      });
  });
});
