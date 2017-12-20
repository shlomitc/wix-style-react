import React from 'react';
import {modalSelectorLayoutTestkitFactory as enzymeModalSelectorLayoutTestkitFactory} from '../../testkit/enzyme';
import {modalSelectorLayoutTestkitFactory} from '../../testkit';
import {isEnzymeTestkitExists, isTestkitExists} from '../../testkit/test-common';
import ModalSelectorLayout from './ModalSelectorLayout';
import {createDriverFactory} from '../test-common';
import modalSelectorLayoutDriverFactory from './ModalSelectorLayout.driver';
import times from 'lodash/times';

describe('ModalSelectorLayout', () => {
  // taken from here: https://github.com/facebook/jest/issues/2157#issuecomment-279171856
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));

  const paginatedDataSourceFactory = items => (
    async (searchQuery, offset, limit) => {
      const filteredItems = items.filter(({title}) => title.includes(searchQuery));
      return {
        items: filteredItems.slice(offset, offset + limit),
        totalCount: filteredItems.length
      };
    }
  );

  const paginatedDataSource =
    paginatedDataSourceFactory(times(7, i => ({id: i, title: `title-${i}`, image: <img/>})));

  const emptyDataSource = paginatedDataSourceFactory([]);
  const createDriver = createDriverFactory(modalSelectorLayoutDriverFactory);
  const requiredProps = {
    dataSource: emptyDataSource
  };
  const createDriverWithProps = props => createDriver(<ModalSelectorLayout {...requiredProps} {...props}/>);

  describe('layout', () => {
    it('should show medium loader', () => {
      const driver = createDriverWithProps({isOpen: true});
      expect(driver.mainLoaderDriver().exists()).toBe(true);
      expect(driver.mainLoaderDriver().isMedium()).toBe(true);
    });

    it('should disable "OK" button while loading', () => {
      const driver = createDriverWithProps({isOpen: true});
      expect(driver.okButtonDriver().isButtonDisabled()).toBe(true);
    });

    it('should hide search while loading', () => {
      const driver = createDriverWithProps({isOpen: true});
      expect(driver.searchDriver().exists()).toBe(false);
    });

    it('should hide the loader & render only passed empty state when there are no items in data source', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: emptyDataSource, emptyState: <img src="empty_state.png"/>});

      await flushPromises();

      expect(driver.mainLoaderDriver().exists()).toBe(false);
      expect(driver.showsNoResultsFoundState()).toBe(false);
      expect(driver.searchDriver().exists()).toBe(false);
      expect(driver.showsEmptyState()).toBe(true);
      expect(driver.getEmptyState()).toBeInstanceOf(HTMLImageElement);
      expect(driver.getEmptyState().src).toBe('empty_state.png');
      expect(driver.listExists()).toBe(false);
    });

    it('should hide loader & render the list of items with images, when there are items in data source', async () => {

      const dataSource = paginatedDataSourceFactory([
        {id: 1, title: 'rick', subtitle: 'sanchez', extraText: 'get', image: <img src="rick.png"/>},
        {id: 2, title: 'morty', subtitle: 'smith', extraNode: <img src="shwifty.png"/>, image: <img src="morty.png"/>}
      ]);
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      expect(driver.mainLoaderDriver().exists()).toBe(false);
      expect(driver.showsEmptyState()).toBe(false);
      expect(driver.listExists()).toBe(true);
      expect(driver.getSelectorDriverAt(0).titleTextDriver().getText()).toBe('rick');
      expect(driver.getSelectorDriverAt(0).subtitleTextDriver().getText()).toBe('sanchez');
      expect(driver.getSelectorDriverAt(0).getExtraNode().textContent).toBe('get');
      expect(driver.getSelectorDriverAt(0).getImage()).toBeInstanceOf(HTMLImageElement);
      expect(driver.getSelectorDriverAt(0).getImage().src).toBe('rick.png');
      expect(driver.getSelectorDriverAt(1).titleTextDriver().getText()).toBe('morty');
      expect(driver.getSelectorDriverAt(1).subtitleTextDriver().getText()).toBe('smith');
      expect(driver.getSelectorDriverAt(1).getExtraNode()).toBeInstanceOf(HTMLImageElement);
      expect(driver.getSelectorDriverAt(1).getExtraNode().src).toBe('shwifty.png');
      expect(driver.getSelectorDriverAt(1).getImage()).toBeInstanceOf(HTMLImageElement);
      expect(driver.getSelectorDriverAt(1).getImage().src).toBe('morty.png');
    });
  });

  describe('texts & callbacks', () => {
    it('should allow setting title', () => {
      const expectedTitle = 'Wubba Lubba Dub Dub';
      const driver = createDriverWithProps({isOpen: true, title: expectedTitle});
      expect(driver.getTitle()).toBe(expectedTitle);
    });

    it('should allow setting subtitle', async () => {
      const expectedSubtitle = 'Wubba Lubba Dub Dub';
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: paginatedDataSource,
        subtitle: expectedSubtitle
      });

      await flushPromises();
      expect(driver.subtitleTextDriver().getText()).toBe(expectedSubtitle);
    });

    it('should call "onClose" when clicking on X icon', () => {
      const stub = jest.fn();
      const driver = createDriverWithProps({isOpen: true, onClose: stub});
      driver.clickOnClose();
      expect(stub).toHaveBeenCalled();
    });

    it('should allow setting "Cancel" button text', () => {
      const expectedTitle = 'Wubba Lubba Dub Dub';
      const driver = createDriverWithProps({isOpen: true, cancelButtonText: expectedTitle});

      expect(driver.cancelButtonDriver().getButtonTextContent()).toBe(expectedTitle);
    });

    it('should call "onCancel" when clicking on "Cancel" icon', () => {
      const stub = jest.fn();
      const driver = createDriverWithProps({isOpen: true, cancelButtonText: 'Cancel', onCancel: stub});
      driver.cancelButtonDriver().click();

      expect(stub).toHaveBeenCalled();
    });

    it('should allow setting "OK" button text', () => {
      const expectedTitle = 'Wubba Lubba Dub Dub';
      const driver = createDriverWithProps({isOpen: true, okButtonText: expectedTitle});

      expect(driver.okButtonDriver().getButtonTextContent()).toBe(expectedTitle);
    });
  });

  describe('search', () => {
    it('should render search input after the items are loaded', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource});

      await flushPromises();

      expect(driver.searchDriver().exists()).toBe(true);
    });

    it('should allow hiding search', async () => {
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: paginatedDataSource,
        withSearch: false
      });

      await flushPromises();

      expect(driver.searchDriver().exists()).toBe(false);
    });

    it('should allow passing placeholder', async () => {
      const expectedPlaceholder = 'some placeholder';
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, searchPlaceholder: expectedPlaceholder});

      await flushPromises();

      expect(driver.searchDriver().inputDriver.getPlaceholder()).toBe(expectedPlaceholder);
    });

    it('should show medium loader, and then show filtered items', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource});
      await flushPromises();
      driver.searchDriver().inputDriver.focus();
      driver.searchDriver().inputDriver.enterText('title-1');

      expect(driver.mainLoaderDriver().exists()).toBe(true);

      await flushPromises();
      driver.scrollDown();

      expect(driver.mainLoaderDriver().exists()).toBe(false);
      expect(driver.numberOfItemsInList()).toBe(1);
      expect(driver.getSelectorDriverAt(0).titleTextDriver().getText()).toBe('title-1');
    });

    it('should render noResultsFoundState with current search value only if no results were found', async () => {
      const searchValue = 'wubba lubba dub dub';
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: paginatedDataSource,
        noResultsFoundStateFactory: searchValue => <img alt={searchValue} src="no-results-found.png"/>
      });

      expect(driver.showsNoResultsFoundState()).toBe(false);

      await flushPromises();

      expect(driver.showsNoResultsFoundState()).toBe(false);

      driver.searchDriver().inputDriver.focus();
      driver.searchDriver().inputDriver.enterText(searchValue);

      expect(driver.showsNoResultsFoundState()).toBe(false);

      await flushPromises();

      expect(driver.showsNoResultsFoundState()).toBe(true);
      expect(driver.getNoResultsFoundState()).toBeInstanceOf(HTMLImageElement);
      expect(driver.getNoResultsFoundState().src).toBe('no-results-found.png');
      expect(driver.getNoResultsFoundState().alt).toBe(searchValue);

      driver.searchDriver().inputDriver.clickClear();
      await flushPromises();

      expect(driver.showsNoResultsFoundState()).toBe(false);
    });
  });

  describe('pagination', () => {
    it(`should render the first 50 items by default, show a small loader when scrolled down,
    then render the next page and remove the loader`, async () => {
      const dataSource = paginatedDataSourceFactory(times(55, i => ({id: i, title: '', subtitle: ''})));
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      expect(driver.numberOfItemsInList()).toBe(50);
      expect(driver.nextPageLoaderDriver().exists()).toBe(true);
      expect(driver.nextPageLoaderDriver().isSmall()).toBe(true);

      driver.scrollDown();
      await flushPromises();

      expect(driver.numberOfItemsInList()).toBe(55);
      expect(driver.nextPageLoaderDriver().exists()).toBe(false);
    });

    it('should allow configuring items per page', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, itemsPerPage: 2});

      await flushPromises();

      expect(driver.numberOfItemsInList()).toBe(2);

      driver.scrollDown();
      await flushPromises();

      expect(driver.numberOfItemsInList()).toBe(4);

      driver.scrollDown();
      await flushPromises();

      expect(driver.numberOfItemsInList()).toBe(6);
    });
  });

  describe('image size', () => {
    it('should render tiny images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageSize: 'tiny'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageTiny()).toBe(true);
    });

    it('should render small images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageSize: 'small'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageSmall()).toBe(true);
    });

    it('should render portrait images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageSize: 'portrait'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImagePortrait()).toBe(true);
    });

    it('should render large images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageSize: 'large'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageLarge()).toBe(true);
    });

    it('should render cinema images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageSize: 'cinema'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageCinema()).toBe(true);
    });

    it('should render circle images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageShape: 'circle'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageCircle()).toBe(true);
    });

    it('should render rectangular images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource, imageShape: 'rectangular'});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageRectangular()).toBe(true);
    });
  });

  describe('radio', () => {
    const items = [
      {id: 1, title: 'first'},
      {id: '2', title: 'second'}
    ];
    const dataSource = paginatedDataSourceFactory(items);

    it('should render radio buttons', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).toggleType()).toBe('radio');
      expect(driver.getSelectorDriverAt(1).toggleType()).toBe('radio');
    });

    it('all rows should be unchecked', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(false);
      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(false);
    });

    it('should toggle rows when clicking on them', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      driver.getSelectorDriverAt(0).toggle();
      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(true);
      expect(driver.getSelectorDriverAt(1).isChecked()).toBe(false);

      driver.getSelectorDriverAt(1).toggle();
      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(false);
      expect(driver.getSelectorDriverAt(1).isChecked()).toBe(true);
    });

    it('should disable the "OK" button until some row is selected', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource});

      await flushPromises();

      expect(driver.okButtonDriver().isButtonDisabled()).toBe(true);

      driver.getSelectorDriverAt(0).toggle();

      expect(driver.okButtonDriver().isButtonDisabled()).toBe(false);
    });

    it('should remember the selection if triggered search', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource});
      await flushPromises();
      driver.getSelectorDriverAt(0).toggle();
      driver.searchDriver().inputDriver.focus();
      driver.searchDriver().inputDriver.enterText('second');
      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(false);

      driver.searchDriver().inputDriver.clickClear();
      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isChecked()).toBe(true);
    });

    it('should call "onOk" with the selected item when clicking on "OK" button', async () => {
      const stub = jest.fn();
      const driver = createDriverWithProps({isOpen: true, dataSource, onOk: stub});
      await flushPromises();
      driver.getSelectorDriverAt(0).toggle();
      driver.okButtonDriver().click();

      expect(stub).toHaveBeenCalledWith(items[0]);
    });
  });

  describe('defaults', () => {
    it('should render empty state', async () => {
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: emptyDataSource
      });
      await flushPromises();

      expect(driver.showsEmptyState()).toBe(true);
      expect(driver.getEmptyState().textContent).toBe(`You don't have any items`);
    });

    it('should render noResultsFound state', async () => {
      const searchValue = 'wubba lubba dub dub';
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: paginatedDataSource
      });
      await flushPromises();
      driver.searchDriver().inputDriver.focus();
      driver.searchDriver().inputDriver.enterText(searchValue);
      await flushPromises();

      expect(driver.showsNoResultsFoundState()).toBe(true);
      expect(driver.getNoResultsFoundState().textContent).toBe(`No items matched your search "${searchValue}"`);
    });

    it('should render search placeholder "Search..."', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource});

      await flushPromises();

      expect(driver.searchDriver().inputDriver.getPlaceholder()).toBe('Search...');
    });

    it('should render "OK" button text "Select"', () => {
      const driver = createDriverWithProps({isOpen: true});

      expect(driver.okButtonDriver().getButtonTextContent()).toBe('Select');
    });

    it('should render "Cancel" button text "Cancel"', () => {
      const driver = createDriverWithProps({isOpen: true});

      expect(driver.cancelButtonDriver().getButtonTextContent()).toBe('Cancel');
    });

    it('should render title as "Choose Your Items"', () => {
      const driver = createDriverWithProps({isOpen: true});
      expect(driver.getTitle()).toBe('Choose Your Items');
    });

    it('should render large rectangular images', async () => {
      const driver = createDriverWithProps({isOpen: true, dataSource: paginatedDataSource});

      await flushPromises();

      expect(driver.getSelectorDriverAt(0).isImageLarge()).toBe(true);
      expect(driver.getSelectorDriverAt(0).isImageRectangular()).toBe(true);
    });

    it('should not render subtitle by default', async () => {
      const driver = createDriverWithProps({
        isOpen: true,
        dataSource: paginatedDataSource
      });

      await flushPromises();
      expect(driver.subtitleTextDriver().exists()).toBe(false);
    });
  });

  describe('testkits', () => {
    describe('vanilla', () => {
      it('should exist', () => {
        expect(isTestkitExists(
          <ModalSelectorLayout {...requiredProps}/>, modalSelectorLayoutTestkitFactory)).toBe(true);
      });
    });

    describe('enzyme', () => {
      it('should exist', () => {
        expect(isEnzymeTestkitExists(
          <ModalSelectorLayout {...requiredProps}/>, enzymeModalSelectorLayoutTestkitFactory)).toBe(true);
      });
    });
  });
});
