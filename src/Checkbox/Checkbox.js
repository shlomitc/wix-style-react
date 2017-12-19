import React from 'react';
import {node, bool, func, oneOf, string} from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';

import styles from './Checkbox.scss';
import SvgV from '../svg/V';
import WixComponent from '../BaseComponents/WixComponent';
import Label from '../Label/Label';

/** a simple WixStyle checkbox */
class Checkbox extends WixComponent {
  static displayName = 'Checkbox';

  static propTypes = {
    /** used for automatic testing */
    active: bool,
    checked: bool,
    children: node,
    disabled: bool,
    hasError: bool,
    id: string,
    indeterminate: bool,

    /** used for automatic testing */
    hover: bool,
    size: oneOf(['medium', 'large']),
    onChange: func
  };

  static defaultProps = {
    checked: false,
    size: 'medium',
    onChange: e => {
      e.stopPropagation();
    }
  };

  _id = `${Checkbox.displayName}-${uniqueId()}`;

  render() {
    const {
      id = this._id,
      checked,
      indeterminate,
      disabled,
      hasError,
      hover,
      active,
      size,
      onChange
    } = this.props;

    const classname = classNames(
      styles.root,
      checked ? styles.checked : styles.unchecked,
      {
        [styles.hover]: hover,
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.hasError]: hasError
      }
    );

    const checkedSymbol = indeterminate ? <div className={styles.indeterminate}/> : <SvgV/>;

    return (
      <div className={classname}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={disabled ? null : onChange}
          style={{display: 'none'}}
          />

        <Label for={id} appearance={disabled ? 'T1.4' : 'T1.1'} dataHook="checkbox-label">
          <div className={classNames(styles.checkbox, styles[size])}>
            <div className={styles.inner}>
              {checkedSymbol}
            </div>
          </div>

          <div className={styles.children}>
            {this.props.children}
          </div>
        </Label>
      </div>
    );
  }
}

export default Checkbox;
