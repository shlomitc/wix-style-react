import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {isClassExists} from '../../../test/utils';
const buttonDriverFactory = ({element, wrapper, component}) => {
  return {
    exists: () => !!element,
    click: () => ReactTestUtils.Simulate.click(element),
    getButtonTextContent: () => element.textContent,
    isButtonDisabled: () => element.getAttribute('disabled') === '',
    isPrefixIconExists: () => element.innerHTML.indexOf('prefix') !== -1,
    isSuffixIconExists: () => element.innerHTML.indexOf('suffix') !== -1,
    hasTheme: theme => isClassExists(element, theme),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default buttonDriverFactory;
