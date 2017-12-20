import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import omit from 'lodash/omit';
import DropdownLayout from '../DropdownLayout/DropdownLayout';
import Button from '../Button';
import styles from './ButtonWithOptions.scss';

class ButtonWithOptions extends WixComponent {
  constructor(props) {
    super(props);
    this.state = {showOptions: false, selectedId: props.selectedId};

    this.onSelect = this.onSelect.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.showOptions = this.showOptions.bind(this);

    if (props.children) {
      this.sortChildren(props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.sortChildren(nextProps);
  }

  sortChildren(props) {
    [this.buttonElement, ...this.optionsElement] = React.Children.toArray(props.children);
  }

  cleanOptionToSimpleTextForm(children) {
    const supportedElements = ['string', 'span'];
    if (typeof children === 'string') {
      return children;
    }

    let value = [];
    children.forEach(node => {
      if (supportedElements.includes(node.type || typeof node)) {
        value.push(node);
      }
    });
    
    return value;
  }
  
  getSelectedOptionValue(props, state) {
    const {children, skin, text} = props;
    const {selectedId} = state;
    if (!skin || selectedId < 0) {
      return text;
    }
    let value;
    const childrenArr = React.Children.toArray(children);
    childrenArr.forEach(option => {
      const {id, children} = option.props;
      if (id === selectedId) {
        value = this.cleanOptionToSimpleTextForm(children);
      }
    });
    
    return [value, <i key={1}/> ];
  }
  
  renderButton() {
    return React.cloneElement(this.buttonElement, {
      onClick: this.showOptions,
      children: this.getSelectedOptionValue(this.props, this.state)
    });
  }

  renderDropdownLayout() {
    const dropdownProps = omit(this.props, ['dataHook', 'restrainDropdownSize']);

    const dropdownLayoutOptions = React.Children.map(this.optionsElement, option => {
      const {children: value, ...rest} = option.props;
      return {value, ...rest};
    });

    return (
      <DropdownLayout
        {...dropdownProps}
        dataHook="buttonWithOptions-dropdownLayout"
        options={dropdownLayoutOptions}
        theme={this.props.theme}
        visible={this.state.showOptions}
        onSelect={(option, isSelectedOption) => {
          this.setState({selectedId: option.id});
          this.onSelect(option, isSelectedOption);
        }}
        onClickOutside={this.hideOptions}
        />
    );
  }

  render() {
    const {dropDirectionUp} = this.props;
    const sizeRestrictionStyles = this.props.restrainDropdownSize ? {display: 'inline-block'} : {};

    return (
      <div style={sizeRestrictionStyles}>
        {dropDirectionUp ? this.renderDropdownLayout() : null}
        {this.renderButton()}
        {!dropDirectionUp ? this.renderDropdownLayout() : null}
      </div>
    );
  }

  hideOptions() {
    this.setState({showOptions: false});
  }

  showOptions() {
    this.setState({showOptions: true});
  }

  onSelect(option, isSelectedOption) {
    this.hideOptions();

    if (!isSelectedOption) {
      this.props.onSelect(option);
    }
  }
}

ButtonWithOptions.defaultProps = {
  ...DropdownLayout.defaultProps,
  onSelect: () => {},
  restrainDropdownSize: true,
  skin: ''
};

ButtonWithOptions.propTypes = {
  ...DropdownLayout.propTypes,
  restrainDropdownSize: PropTypes.bool,
  children: PropTypes.arrayOf((propValue, key) => {
    if (key === 0 && propValue[key].type !== ButtonWithOptions.Button) {
      return new Error(`ButtonWithOptions: Invalid Prop children, first child must be ButtonWithOptions.Button`);
    }

    if (key !== 0) {
      React.Children.forEach(propValue[key], item => {
        if (item.type !== ButtonWithOptions.Option) {
          return new Error(`ButtonWithOptions: Invalid Prop children was given. Validation failed on child number ${key}`);
        }
      });
    }
  }),
  skin: PropTypes.string
};

ButtonWithOptions.Option = () => null;
ButtonWithOptions.Option.displayName = 'ButtonWithOptions.Option';

ButtonWithOptions.Button = props => (
  <div className={styles.buttonWrapper} data-hook="buttonWithOptions-button-wrapper">
    <Button {...props}/>
  </div>
);

ButtonWithOptions.Button.displayName = 'ButtonWithOptions.Button';

export default ButtonWithOptions;

