import React from 'react';
import {func, string, bool, object, any} from 'prop-types';
import WixComponent from '../../../BaseComponents/WixComponent';
import Prefix from './components/Prefix';
import Suffix from './components/Suffix';

export default class Button extends WixComponent {
  static propTypes = {
    children: any,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    disabled: bool,
    classes: object
  }

  static Prefix = Prefix;
  static Suffix = Suffix;
  static displayName = 'Button';

  render() {
    const {disabled, onClick, children, type, onMouseEnter, onMouseLeave, classes} = this.props;

    return (
      <button
        className={classes.button}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        type={type}
        >
        {children}
      </button>
    );
  }
}
