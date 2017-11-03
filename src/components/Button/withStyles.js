import React from 'react';
import {string, object} from 'prop-types';
import {css} from 'glamor';

export function withStyles(WrappedComponent) {
  const StylesWrapper = (props, {theme, wixTpaStyles}) => {
    const styles = require(`./themes/Button-${theme}.scss`);
    let className = '';

    if (Object.keys(wixTpaStyles).length > 0) {
      const {color, backgroundColor, fontSize, borderColor} = wixTpaStyles;

      className = css({
        backgroundColor,
        color,
        fontSize,
        borderColor,
        ':hover': {
          backgroundColor,
          color: 'black',
          opacity: '0.5'
        }
      }).toString();
    }

    return <WrappedComponent {...{...props, theme, wixStyles: {...styles, tpa: className}}}/>;
  };

  StylesWrapper.contextTypes = {
    theme: string,
    wixTpaStyles: object
  };

  return StylesWrapper;
}
