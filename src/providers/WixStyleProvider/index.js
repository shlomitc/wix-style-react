import React, {Children} from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.any,
  theme: PropTypes.oneOf(supportedThemes),
  wixTpaStyles: PropTypes.object
};

WixStyleProvider.defaultProps = {
  theme: 'core',
  wixTpaStyles: {}
};

WixStyleProvider.childContextTypes = {
  theme: PropTypes.oneOf(supportedThemes),
  wixTpaStyles: PropTypes.object
};
