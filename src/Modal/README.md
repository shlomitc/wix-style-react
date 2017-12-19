# Modal component

> General Modal

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| borderRadius | number | 0 | - | Border radius of modal |
| theme | blue, red, green | blue | - | |
| isOpen | bool | - | + | Is the modal open or not |
| contentLabel | string | - | + |  |
| maxHeight | string | - | - | maxHeight of modal(when it has scrollableContent) |
| onCancel | func | - | - | Called when user presses the X on the top bar, or the cancel button on the footer |
| zIndex | number | - | - |  |
| shouldCloseOnOverlayClick | bool | - | - |  |
| onRequestClose | func | - | - |  |
| onAfterOpen | func | - | - |  |
| horizontalPosition | start, center, end | center | - | horizontal position of the modal |
| verticalPosition | start, center, end | center | - | vertical position of the modal |
| closeTimeoutMS | number | 500 | - | Number indicating the milliseconds to wait before closing the modal |
| scrollable | boolean | true | - | Specifies if modal portal supports scroll |
| scrollableContent | boolean | false | - | Specifies if modal content should become scrollable when modal size will fit the window |
| appElement | string | - | false | selector spcifying where to apply the aria-hidden attribute  |
| overlayPosition | static, relative, absolute, fixed, sticky | fixed | - | css position of the modal overlay |
| parentSelector | func | - | - | A function that returns a DOM element on which the modal should be appended to |
