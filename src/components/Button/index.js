import React from 'react';
import {func, object, node, string, bool, oneOf} from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import classNames from 'classnames';
import {withStyles} from './withStyles';

class Button extends WixComponent {
  static propTypes = {
    children: node,
    id: string,
    prefixIcon: node,
    suffixIcon: node,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    active: bool,
    disabled: bool,
    height: oneOf(['small', 'medium', 'large']),
    hover: bool,
    wixStyles: object,
    skin: oneOf([
      'transparent',
      'fullred',
      'fullgreen',
      'fullpurple',
      'emptyred',
      'emptygreen',
      'emptybluesecondary',
      'emptyblue',
      'emptypurple',
      'fullblue',
      'login',
      'emptylogin',
      'transparentblue',
      'whiteblue',
      'whiteblueprimary',
      'whitebluesecondary',
      'close-standard',
      'close-dark',
      'close-transparent',
      'icon-greybackground',
      'icon-standard',
      'icon-standardsecondary',
      'icon-white',
      'icon-whitesecondary'
    ])
  }

  static defaultProps = {
    height: 'medium',
    skin: 'fullblue'
  }

  constructor(props) {
    super(props);
    this.addPrefix = this.addPrefix.bind(this);
    this.addSuffix = this.addSuffix.bind(this);
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon(className, icon, height) {
    const iconSize = height === 'small' ? '8px' : height === 'medium' ? '12px' : '16px';
    const dataHook = className === this.props.wixStyles.prefix ? 'btn-prefix' : 'btn-suffix';

    return (
      icon ?
        <div className={className} data-hook={dataHook}>
          {React.cloneElement(icon, {size: iconSize})}
        </div> :
        null
    );
  }

  addPrefix() {
    const {wixStyles, prefixIcon, height} = this.props;
    return this.addIcon(wixStyles.prefix, prefixIcon, height);
  }

  addSuffix() {
    const {wixStyles, suffixIcon, height} = this.props;
    return this.addIcon(wixStyles.suffix, suffixIcon, height);
  }

  render() {
    const {disabled, onClick, children, type, onMouseEnter, onMouseLeave, skin, hover, active, height, wixStyles} = this.props;

    const classes = classNames({
      [wixStyles.button]: true,
      [wixStyles[skin]]: true,
      [wixStyles.hover]: hover,
      [wixStyles.active]: active,
      [wixStyles.disabled]: disabled,
      [wixStyles[`height${height}`]]: height !== 'medium',
      [wixStyles.tpa]: !!wixStyles.tpa
    });

    return (
      <button
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        {this.addPrefix()}
        {children}
        {this.addSuffix()}
      </button>
    );
  }
}

Button.displayName = 'Button';

export default withStyles(Button);
