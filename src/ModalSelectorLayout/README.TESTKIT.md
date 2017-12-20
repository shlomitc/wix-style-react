# ModalSelectorLayout Testkits

> Loader

## Enzyme/ReactTestUtils TestKit API

| method                   | arguments | returned value                           | description                              |
| ------------------------ | --------- | ---------------------------------------- | ---------------------------------------- |
| exists                   | -         | boolean                                  | fulfilled if element in the DOM          |
| mainLoaderDriver         | -         | [LoaderDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Loader&full=0&down=0&left=1&panelRight=0) | Main loader shown while the initial items are loading/being filtered |
| nextPageLoaderDriver     | -         | [LoaderDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Loader&full=0&down=0&left=1&panelRight=0) | Loader shown at the bottom of the list while loading the next page |
| cancelButtonDriver       | -         | [ButtonDriver](https://wix.github.io/wix-style-react/?selectedKind=Backoffice&selectedStory=Button&full=0&down=0&left=1&panelRight=0) | "Cancel" button                          |
| okButtonDriver           | -         | [ButtonDriver](https://wix.github.io/wix-style-react/?selectedKind=Backoffice&selectedStory=Button&full=0&down=0&left=1&panelRight=0) | "OK" button                              |
| searchDriver             | -         | [SearchDriver](https://wix.github.io/wix-style-react/?selectedKind=3.%20Inputs&selectedStory=3.9%20Search&full=0&down=0&left=1&panelRight=0) | Search input                             |
| subtitleTextDriver       | -         | [TextDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Text&full=0&down=0&left=1&panelRight=0) | Subtitle of the modal                    |
| getTitle                 | -         | string                                   | Title of the modal                       |
| clickOnClose             | -         | -                                        | Click on "X" button of modal             |
| showsEmptyState          | -         | boolean                                  | Whether the "emptyState" element is shown |
| getEmptyState            | -         | Element                                  | Get the "emptyState" element             |
| showsNoResultsFoundState | -         | boolean                                  | Whether the "noResultsFoundState" element is shown |
| getNoResultsFoundState   | -         | Element                                  | Get the "noResultsFoundState" element    |
| listExists               | -         | boolean                                  | If the list of items exists at all       |
| numberOfItemsInList      | -         | number                                   | Number of rows currently rendered        |
| getSelectorDriverAt      | number    | [SelectorDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Selector&full=0&down=0&left=1&panelRight=0) | Return the instance of selectorDriver for the row at the passed index |
| scrollDown               | -         | -                                        | Triggers "scroll" event on the list, needed to trigger the infinite scroll |

## Protractor TestKit API

| method                 | arguments | returned value                           | description                              |
| ---------------------- | --------- | ---------------------------------------- | ---------------------------------------- |
| element                | -         | element                                  | returns the driver element               |
| mainLoaderDriver       | -         | [LoaderDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Loader&full=0&down=0&left=1&panelRight=0) | Main loader shown while the initial items are loading |
| nextPageLoaderDriver   | -         | [LoaderDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Loader&full=0&down=0&left=1&panelRight=0) | Loader shown at the bottom of the list while loading more items |
| cancelButtonDriver     | -         | [ButtonDriver](https://wix.github.io/wix-style-react/?selectedKind=Backoffice&selectedStory=Button&full=0&down=0&left=1&panelRight=0) | "Cancel" button                          |
| okButtonDriver         | -         | [ButtonDriver](https://wix.github.io/wix-style-react/?selectedKind=Backoffice&selectedStory=Button&full=0&down=0&left=1&panelRight=0) | "OK" button                              |
| searchDriver           | -         | [SearchDriver](https://wix.github.io/wix-style-react/?selectedKind=3.%20Inputs&selectedStory=3.9%20Search&full=0&down=0&left=1&panelRight=0) | Search input                             |
| subtitleTextDriver     | -         | [TextDriver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Text&full=0&down=0&left=1&panelRight=0) | Subtitle of the modal                    |
| getTitle               | -         | string                                   | Title of the modal                       |
| clickOnClose           | -         | -                                        | Click on "X" button of modal             |
| getEmptyState          | -         | Element                                  | Get the "emptyState" element             |
| getNoResultsFoundState | -         | Element                                  | Get the "noResultsFoundState" element    |
| listExists             | -         | boolean                                  | If the list of items exists at all       |
| numberOfItemsInList    | -         | number                                   | Number of rows currently rendered        |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {mount} from 'enzyme';
  import {modalSelectorLayoutTestkitFactory} from 'wix-style-react/testkit';
  import {modalSelectorLayoutTestkitFactory as enzymeModalSelectorLayoutTestkitFactory} from 'wix-style-react/testkit/enzyme';
  import ModalSelectorLayout from 'wix-style-react/ModalSelectorLayout';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><ModalSelectorLayout dataHook={dataHook}/></div>);
  const testkit = enzymeModalSelectorLayoutTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><ModalSelectorLayout dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = modalSelectorLayoutTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <ModalSelectorLayout dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {modalSelectorLayoutTestkitFactory, waitForVisibilityOf} from 'wix-style-react/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = modalSelectorLayoutTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find ModalSelectorLayout')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });

```
