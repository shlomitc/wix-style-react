import React from 'react';
import {any, object} from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';

export default class WixStyleProvider extends React.PureComponent {
  render() {
    const {children, theme} = this.props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}

WixStyleProvider.propTypes = {
  children: any,
  theme: object
};

WixStyleProvider.defaultProps = {
  theme: {}
};

export const withStyles = (Component, styles) =>
  injectSheet(styles)(Component);
