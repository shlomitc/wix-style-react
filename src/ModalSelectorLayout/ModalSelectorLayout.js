import React from 'react';
import {bool, func, node, number, oneOf, string} from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import Loader from '../Loader/Loader';
import HeaderLayout from '../MessageBox/HeaderLayout';
import css from './ModalSelectorLayout.scss';
import FooterLayout from '../MessageBox/FooterLayout';
import Selector from '../Selector/Selector';
import Search from '../Search/Search';
import InfiniteScroll from '../DataTable/InfiniteScroll';
import Text from '../Text/Text';

/**
 * Use this component when needed to select one / multiple items having complex descriptions.
 * E.g.: choosing products to promote via ShoutOuts
 */
export default class ModalSelectorLayout extends WixComponent {
  static propTypes = {
    /** Title of the modal */
    title: string.isRequired,
    /** Fixed text displayed above the list */
    subtitle: string,
    /** OK button callback, called with the currently selected item  */
    onOk: func,
    /** X button callback */
    onClose: func,
    /** Cancel button callback */
    onCancel: func,
    /**
     * paging function that should have a signature of
     * ```typescript
     * (searchQuery: string, offset: number, limit: number) =>
     * Promise<{
     *  items: Array<{
     *    id: number | string,
     *    title: string,
     *    subtitle?: string,
     *    extraText?: string,
     *    image?: node
     *  }>,
     *  totalCount: number
     * }>
     * ```
     * `offset` - next requested item's index<br>
     * `limit` - number of items requested<br>
     * `totalCount` - total number of items that suffice the current search query
     * */
    dataSource: func.isRequired,
    /** Cancel button's text */
    cancelButtonText: string.isRequired,
    /** OK button's text */
    okButtonText: string.isRequired,
    /** Image icon size */
    imageSize: oneOf([
      'tiny',
      'small',
      'portrait',
      'large',
      'cinema'
    ]),
    /**
     * Image icon shape, `rectangular` or `circle`.<br>
     * NOTE: `circle` is not compatible with `imageSize` of `portrait` or `cinema`
     * */
    imageShape: (props, propName, componentName) => {
      if (['portrait', 'cinema'].includes(props.imageSize) && props[propName] === 'circle') {
        return new Error(`${componentName}: prop "imageSize" with value of "${props.imageSize}" is incompatible with prop imageShape with value of "circle" — use "rectangular" instead.`);
      }
    },
    /** Placeholder text of the search input */
    searchPlaceholder: string.isRequired,
    /**
     * Component/element that will be rendered when there is nothing to display,
     * i.e. empty `{items:[], totalCount: 0}` was returned on the first call to `dataSource`
     * */
    emptyState: node.isRequired,
    /**
     * Function that will get the current `searchQuery` and should return the component/element
     * that will be rendered when there no items that suffice the entered search query
     *  */
    noResultsFoundStateFactory: func.isRequired,
    /** Number of items loaded each time the user scrolls down */
    itemsPerPage: number.isRequired,
    /** Whether to display the search input or not */
    withSearch: bool.isRequired,
    height: string
  };

  static defaultProps = {
    title: 'Choose Your Items',
    okButtonText: 'Select',
    cancelButtonText: 'Cancel',
    searchPlaceholder: 'Search...',
    imageSize: 'large',
    imageShape: 'rectangular',
    itemsPerPage: 50,
    withSearch: true,
    height: '100%',
    noResultsFoundStateFactory: searchValue =>
      <Text appearance="T1">No items matched your search {`"${searchValue}"`}</Text>
  };

  state = {
    isLoaded: false,
    isSearching: false,
    items: [],
    searchValue: '',
    selectedItem: undefined,
    shouldShowNoResultsFoundState: false
  };

  render() {
    const {
      title,
      subtitle,
      onClose,
      onCancel,
      onOk,
      cancelButtonText,
      okButtonText,
      searchPlaceholder,
      emptyState,
      noResultsFoundStateFactory,
      withSearch,
      height
    } = this.props;

    const {
      items,
      isLoaded,
      isSearching,
      searchValue,
      selectedItem,
      shouldShowNoResultsFoundState
    } = this.state;

    return (
      <div className={css.modalContent} style={{height}}>
        <HeaderLayout title={title} onCancel={onClose}/>
        {isLoaded && <div className={css.subheaderWrapper}>
          {subtitle &&
          <div className={css.subtitleWrapper}>
            <Text appearance="T1" dataHook="modal-selector-subtitle">{subtitle}</Text>
          </div>
          }
          {withSearch &&
          <div className={css.searchWrapper}>
            <Search
              dataHook="modal-selector-search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={e => this._onSearchChange(e)}
              />
          </div>
          }
        </div>}
        <div className={css.modalBody} data-hook="modal-selector-modal-body">
          {
            ((items.length === 0 && !isLoaded) || isSearching) &&
            <div className={css.mediumLoaderWrapper}>
              <Loader
                size="medium"
                dataHook="modal-selector-medium-loader"
                />
            </div>
          }
          {items.length === 0 && isLoaded && !searchValue &&
          <div data-hook="modal-selector-empty-state" className={css.emptyStateWrapper}>
            {emptyState}
          </div>
          }
          {((!isLoaded || items.length > 0) || isSearching) &&
          <InfiniteScroll
            key={searchValue}
            loadMore={() => this._loadMore()}
            hasMore={this._hasMore()}
            useWindow={false}
            loader={items.length > 0 &&
            <div className={css.smallLoaderWrapper}>
              <Loader
                size="small"
                dataHook="modal-selector-small-loader"
                />
            </div>}
            >
            {this._renderItems()}
          </InfiniteScroll>
          }
          {shouldShowNoResultsFoundState &&
          <div
            data-hook="modal-selector-no-results-found-state"
            className={css.noResultsFoundStateWrapper}
            >
            {noResultsFoundStateFactory(searchValue)}
          </div>
          }
        </div>
        <FooterLayout
          allPaddings={isLoaded}
          onCancel={onCancel}
          onOk={() => onOk(selectedItem)}
          cancelText={cancelButtonText}
          confirmText={okButtonText}
          enableOk={!!selectedItem}
          />
      </div>
    );
  }

  _renderItems() {
    const {items, selectedItem} = this.state;
    const {imageSize, imageShape} = this.props;

    if (items.length > 0) {
      return (
        <ul data-hook="modal-selector-list" className={css.list}>
          {items.map(item => (
            <Selector
              id={item.id}
              key={item.id}
              dataHook={`modal-selector-selector`}
              imageSize={imageSize}
              imageShape={imageShape}
              toggleType="radio"
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              extraText={item.extraText}
              isSelected={selectedItem && (selectedItem.id === item.id)}
              onToggle={() => this.setState({selectedItem: item})}
              />

          ))}
        </ul>
      );
    }
  }

  _onSearchChange(e) {
    this.setState({
      searchValue: e.target.value,
      isSearching: true,
      items: []
    });
  }

  _loadMore() {
    const {dataSource, itemsPerPage} = this.props;
    const {items, searchValue} = this.state;
    dataSource(searchValue, items.length, itemsPerPage).then(({items: itemsFromNextPage, totalCount}) => {
      if (this.state.searchValue === searchValue) { // react only to the resolve of the relevant search
        this.setState({
          items: [...items, ...itemsFromNextPage],
          isLoaded: true,
          isSearching: false,
          totalCount,
          shouldShowNoResultsFoundState: (items.length + itemsFromNextPage.length) === 0
        });
      }
    });
  }

  _hasMore() {
    const {items, isLoaded, totalCount, isSearching} = this.state;
    return (items.length === 0 && !isLoaded) || (items.length < totalCount) || isSearching;
  }
}
