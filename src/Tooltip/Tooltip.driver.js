import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';
import last from 'lodash/last';

const arrowDirectionToPlacement = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
};

const tooltipDriverFactory = ({element, wrapper}) => {
  const bodyOrWrapper = {
    querySelector: query => (document.body.querySelector(query) || (wrapper.querySelector && wrapper.querySelector(query))),
    querySelectorAll: query => {
      const documentResult = document.body.querySelectorAll(query);
      return documentResult.length > 0 ? documentResult : (wrapper.querySelectorAll && wrapper.querySelectorAll(query));
    }
  };
  const getTooltipContent = () => bodyOrWrapper.querySelector('.tooltip');

  return {
    isShown: () => !!bodyOrWrapper.querySelector('.tooltip'),
    focus: () => ReactTestUtils.Simulate.focus(element),
    blur: () => ReactTestUtils.Simulate.blur(element),
    click: () => ReactTestUtils.Simulate.click(element),
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
    hasErrorTheme: () => !!bodyOrWrapper.querySelector('.error'),
    hasDarkTheme: () => !!bodyOrWrapper.querySelector('.dark'),
    hasLightTheme: () => !!bodyOrWrapper.querySelector('.light'),
    getTooltipWrapper: getTooltipContent,
    getChildren: () => element.innerHTML,
    getPlacement: () => {
      const arrowDirection = last(bodyOrWrapper.querySelectorAll('.arrow')).className.split(' ')[1];
      return arrowDirectionToPlacement[arrowDirection];
    },
    getContent: () => {
      let content = getTooltipContent();
      while (content.children.length > 0) {
        content = content.children[0];
      }
      return content.innerHTML;
    },
    getMaxWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['max-width'];
    },
    getMinWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['min-width'];
    },
    getAlignment: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['text-align'];
    },
    getPadding: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values.padding;
    },
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><Tooltip {...props}/></div>, wrapper);
    }
  };
};

export default tooltipDriverFactory;
