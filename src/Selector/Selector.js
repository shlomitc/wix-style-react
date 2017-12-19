import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioGroup/RadioButton/RadioButton';
import Text from '../Text';
import styles from './Selector.scss';
import ExtraText from './ExtraText';
import ExtraIcon from './ExtraIcon';
import ProgressBar from './ProgressBar';

const toggleStyle = {
  display: 'inline-block'
};

class Selector extends WixComponent {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.node,
    imageSize: PropTypes.oneOf([
      'tiny',
      'small',
      'portrait',
      'large',
      'cinema'
    ]),
    imageShape: PropTypes.oneOf(['rectangular', 'circle']),
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    subtitle: PropTypes.string,
    extraNode: PropTypes.node,
    onToggle: PropTypes.func,
    toggleType: PropTypes.oneOf(['checkbox', 'radio'])
  };

  static defaultProps = {
    isSelected: false,
    toggleType: 'radio',
    imageSize: 'large',
    imageShape: 'rectangular'
  };

  toggle(id) {
    this.props.onToggle && this.props.onToggle(id);
  }

  render() {
    const {
      imageSize,
      imageShape,
      image,
      title,
      subtitle,
      extraNode,
      isSelected,
      id,
      toggleType
    } = this.props;
    let toggle;
    if (toggleType === 'checkbox') {
      toggle = <Checkbox dataHook="toggle" style={toggleStyle} checked={isSelected}/>;
    } else {
      toggle = <RadioButton dataHook="toggle" style={toggleStyle} checked={isSelected}/>;
    }
    return (
      <li
        className={styles.selector}
        onClick={() => this.toggle(id)}
        >
        <div className={styles.main}>
          {toggle}
          {image &&
            <div
              data-hook="selector-image"
              className={classNames(styles.image, styles[imageSize], styles[imageShape])}
              >
              {image}
            </div>
          }
          <div>
            <div>
              <Text appearance="T1" dataHook="selector-title">{title}</Text>
            </div>
            {subtitle && <div><Text appearance="T3" dataHook="selector-subtitle">{subtitle}</Text></div>}
          </div>
        </div>
        {extraNode &&
          <div className={styles.extra} data-hook="selector-extra-node">
            {extraNode}
          </div>
        }
      </li>
    );
  }
}

Selector.ExtraText = ExtraText;
Selector.ExtraIcon = ExtraIcon;
Selector.ProgressBar = ProgressBar;

export default Selector;
