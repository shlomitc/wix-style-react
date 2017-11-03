import React, {Children} from 'react';
import {any, oneOf, object} from 'prop-types';

const supportedThemes = ['core', 'backoffice', 'deviantArt'];

export default class WixStyleProvider extends React.PureComponent {
  render() {
    return Children.only(this.props.children);
  }

  getChildContext() {
    return {
      theme: this.props.theme,
      wixTpaStyles: this.props.wixTpaStyles
    };
  }
}

WixStyleProvider.propTypes = {
  children: any,
  theme: oneOf(supportedThemes),
  wixTpaStyles: object
};

WixStyleProvider.defaultProps = {
  theme: 'core',
  wixTpaStyles: {}
};

WixStyleProvider.childContextTypes = {
  theme: oneOf(supportedThemes),
  wixTpaStyles: object
};
