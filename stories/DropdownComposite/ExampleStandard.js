import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownCompositeExample from './DropdownCompositeTemplate';
import Input from '../../src/Input';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';

import styles from './ExampleStandard.scss';

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    withLabel: true,
    label: {
      appearance: 'T1.1',
      children: 'First name'
    },
    input: {
      closeOnSelect: false,
      placeholder: 'Please type in your first name...',
      disabled: false
    },
    required: false,
    info: ''
  };

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = {...this.state[componentName], ...obj};
      Object.keys(prevState[componentName])
        .forEach(k => !prevState[componentName][k] && delete prevState[componentName][k]);
      return prevState;
    });
  }

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.input}>
          <div className={styles.option}>
            <Label>Show label</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.label.children}
                onChange={e => this.setComponentState('label', {children: e.target.value})}
                />&nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.withLabel}
                onChange={() => this.setState({withLabel: !this.state.withLabel})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Placeholder</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.input.placeholder}
                onChange={e => this.setComponentState('input', {placeholder: e.target.value})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Close on select: </Label></div>
              <ToggleSwitch
                size="small"
                checked={this.state.input.closeOnSelect}
                onChange={() => this.setComponentState('input', {closeOnSelect: !this.state.input.closeOnSelect})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Required Field: </Label></div>
              <ToggleSwitch
                size="small"
                checked={this.state.required}
                onChange={() => this.setState({required: !this.state.required})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Info Tooltip</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.info}
                onChange={e => this.setState({info: e.target.value})}
                />
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Enabled state: </Label></div>
              <ToggleSwitch
                size="small"
                checked={!this.state.input.disabled}
                onChange={() => this.setComponentState('input', {disabled: !this.state.input.disabled})}
                />&nbsp;{this.state.input.disabled ? 'Disabled' : 'Enabled'}
            </div>
          </div>

        </div>
        <div className={styles.output}>
          <DropdownCompositeExample {...this.state} onChange={this.props.onChange}/>
        </div>
      </form>
    );
  }
}

export default ExampleStandard;
