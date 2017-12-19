# Checkbox Testkits

> Checkbox

## Checkbox TestKit API

| method                     | arguments | returned value                           | description                              |
| -------------------------- | --------- | ---------------------------------------- | ---------------------------------------- |
| getInput                   | -         | element                                  | returns checkbox input element           |
| getLabel                   | -         | element                                  | returns checkbox label element           |
| getLabelDriver             | -         | instance of [label driver](https://wix.github.io/wix-style-react/?selectedKind=Core&selectedStory=Label&full=0&down=0&left=1&panelRight=0) | label testkit instantiated with checkbox's inner label |
| isChecked                  | -         | bool                                     | fulfilled if element has class '.checked' |
| isDisabled                 | -         | bool                                     | fulfilled if element has class '.disabled' |
| isIndeterminate            | -         | bool                                     | fulfilled if element has class '.indeterminate' |
| click                      | -         | -                                        | clicks on the checkbox                   |
| exists (Only in Unit Test) | -         | bool                                     | fulfilled if element in the DOM          |
| element (Only in E2E)      | -         | element                                  | returns the driver element               |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {checkboxTestkitFactory} from 'wix-style-react/testkit';
  import {checkboxTestkitFactory as enzymeCheckboxTestkitFactory} from 'wix-style-react/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Checkbox dataHook={dataHook}/></div>);
  const testkit = enzymeCheckboxTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Checkbox dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = checkboxTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <Checkbox dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {checkboxTestkitFactory, waitForVisibilityOf} from 'wix-style-react/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = checkboxTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Checkbox')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
