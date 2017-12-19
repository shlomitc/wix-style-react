import {getStoryUrl, modalSelectorLayoutTestkitFactory, waitForVisibilityOf} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('ModalSelectorLayout', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.10 Modal Selector Layout');
  const modalSelectorLayoutDriver = modalSelectorLayoutTestkitFactory({dataHook: 'storybook-modal-selector-layout'});

  beforeAll(() => {
    browser.get(storyUrl);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  it('should render defaults', () => {
    autoExampleDriver.setProps({size: 'large', color: 'white', text: 'Wubba Lubba Dub Dub'});

    waitForVisibilityOf(modalSelectorLayoutDriver.element(), 'Cannot find <ModalSelectorLayout/>')
      .then(() => {
        expect(modalSelectorLayoutDriver.element().isDisplayed()).toBe(true);
        expect(modalSelectorLayoutDriver.getTitle()).toBe('Choose Your Items');
      });
  });
});
