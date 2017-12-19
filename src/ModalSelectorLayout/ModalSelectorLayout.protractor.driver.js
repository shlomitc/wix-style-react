import {protractorTestkitFactoryCreator} from '../test-common';
import loaderDriverFactory from '../Loader/Loader.protractor.driver';
import buttonDriverFactory from '../Backoffice/Button/Button.protractor.driver';
import textDriverFactory from '../Text/Text.protractor.driver';
import searchDriverFactory from '../Search/Search.protractor.driver';

const loaderTestkitFactory = protractorTestkitFactoryCreator(loaderDriverFactory);
const buttonTestkitFactory = protractorTestkitFactoryCreator(buttonDriverFactory);
const textTestkitFactory = protractorTestkitFactoryCreator(textDriverFactory);
const searchTestkitFactory = protractorTestkitFactoryCreator(searchDriverFactory);

const modalSelectorLayoutDriverFactory = component => {
  const findInComponentByDataHook = dataHook => component.$(`[data-hook="${dataHook}"]`);
  const findAllInComponentByDataHook = dataHook => component.$$(`[data-hook="${dataHook}"]`);
  const mediumLoaderDriver = () => loaderTestkitFactory({dataHook: 'modal-selector-medium-loader'});
  const smallLoaderDriver = () => loaderTestkitFactory({dataHook: 'modal-selector-small-loader'});
  const cancelButtonDriver = () => buttonTestkitFactory({dataHook: 'cancellation-button'});
  const okButtonDriver = () => buttonTestkitFactory({dataHook: 'confirmation-button'});
  const subtitleTextDriver = () => textTestkitFactory({dataHook: 'modal-selector-subtitle'});
  const searchDriver = () => searchTestkitFactory({dataHook: 'modal-selector-search'});
  return {
    element: () => component,
    mediumLoaderDriver,
    smallLoaderDriver,
    cancelButtonDriver,
    okButtonDriver,
    searchDriver,
    subtitleTextDriver,
    getTitle: () => findInComponentByDataHook('header-layout-title').getText(),
    clickOnClose: () => findInComponentByDataHook('header-close-button').click(),
    getEmptyState: () => findInComponentByDataHook('modal-selector-empty-state'),
    getNoResultsFoundState: () => findInComponentByDataHook('modal-selector-no-results-found-state'),
    listExists: () => findInComponentByDataHook('modal-selector-no-results-found-state'),
    numberOfItemsInList: () => findAllInComponentByDataHook('modal-selector-selector').count()
  };
};

export default modalSelectorLayoutDriverFactory;
