import {getStoryUrl, loaderTestkitFactory, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Loader', () => {
  const storyUrl = getStoryUrl('Core', 'Loader');
  const loaderDriver = loaderTestkitFactory({dataHook: 'storybook-loader'});

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  it('should render given valid props', () => {
    autoExampleDriver.setProps({size: 'large', color: 'white', text: 'Wubba Lubba Dub Dub'});

    waitForVisibilityOf(loaderDriver.element(), 'Cannot find <Loader/>')
      .then(() => {
        expect(loaderDriver.isLarge()).toBe(true);
        expect(loaderDriver.getColor()).toBe('white');
        expect(loaderDriver.hasText()).toBe(true);
        expect(loaderDriver.getText()).toBe('WUBBA LUBBA DUB DUB');
      });
  });
});
