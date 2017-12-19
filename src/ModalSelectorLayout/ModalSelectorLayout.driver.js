import ReactTestUtils from 'react-dom/test-utils';
import {testkitFactoryCreator} from '../test-common';
import loaderDriverFactory from '../Loader/Loader.driver';
import buttonDriverFactory from '../Backoffice/Button/Button.driver';
import selectorDriverFactory from '../Selector/Selector.driver';
import searchDriverFactory from '../Search/Search.driver';
import textDriverFactory from '../Text/Text.driver';



const textTestkitFactory = testkitFactoryCreator(textDriverFactory);
const loaderTestkitFactory = testkitFactoryCreator(loaderDriverFactory);
const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);
const searchTestkitFactory = testkitFactoryCreator(searchDriverFactory);

const modalSelectorLayoutDriverFactory = ({element}) => {
  const findInModalbyDataHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);
  const mediumLoaderDriver = () => loaderTestkitFactory({
    wrapper: element,
    dataHook: 'modal-selector-medium-loader'
  });
  const smallLoaderDriver = () => loaderTestkitFactory({
    wrapper: element,
    dataHook: 'modal-selector-small-loader'
  });
  const cancelButtonDriver = () => buttonTestkitFactory({
    wrapper: element,
    dataHook: 'cancellation-button'
  });
  const okButtonDriver = () => buttonTestkitFactory({
    wrapper: element,
    dataHook: 'confirmation-button'
  });
  const subtitleTextDriver = () => textTestkitFactory({
    wrapper: element,
    dataHook: 'modal-selector-subtitle'
  });
  const searchDriver = () => searchTestkitFactory({
    wrapper: element,
    dataHook: 'modal-selector-search'
  });
  const getList = () => findInModalbyDataHook('modal-selector-list');
  const getModalBody = () => findInModalbyDataHook('modal-selector-modal-body');
  const getSelectors = () => getList().querySelectorAll('[data-hook="modal-selector-selector"]');
  const selectorDriverAt = i => selectorDriverFactory({element: getSelectors()[i]});
  const emptyState = () => findInModalbyDataHook('modal-selector-empty-state');
  const noResultsFoundState = () => findInModalbyDataHook('modal-selector-no-results-found-state');

  return {
    exists: () => !!element,
    mediumLoaderDriver,
    smallLoaderDriver,
    cancelButtonDriver,
    okButtonDriver,
    searchDriver,
    subtitleTextDriver,
    getTitle: () => findInModalbyDataHook('header-layout-title').textContent,
    clickOnClose: () => ReactTestUtils.Simulate.click(findInModalbyDataHook('header-close-button')),
    showsEmptyState: () => !!emptyState(),
    getEmptyState: () => emptyState().childNodes[0],
    showsNoResultsFoundState: () => !!noResultsFoundState(),
    getNoResultsFoundState: () => noResultsFoundState().childNodes[0],
    listExists: () => !!getList(),
    numberOfItemsInList: () => getSelectors().length,
    getSelectorDriverAt: i => selectorDriverAt(i),
    scrollDown: () => getModalBody().dispatchEvent(new Event('scroll'))
  };
};

export default modalSelectorLayoutDriverFactory;
