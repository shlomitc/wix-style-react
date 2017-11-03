import React, {Children} from 'react';
import PropTypes from 'prop-types';

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
  theme: PropTypes.string.isRequired,
  wixTpaStyles: PropTypes.object
};

WixStyleProvider.defaultProps = {
  wixTpaStyles: {}
};

WixStyleProvider.childContextTypes = {
  theme: PropTypes.string.isRequired,
  wixTpaStyles: PropTypes.object
};

export function withTheme(WrappedComponent) {
  const ThemeWrapper = (props, {theme}) => <WrappedComponent {...{...props, theme}}/>;

  ThemeWrapper.contextTypes = {
    theme: PropTypes.string.isRequired
  };

  return ThemeWrapper;
}
