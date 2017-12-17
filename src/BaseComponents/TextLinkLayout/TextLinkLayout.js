import React from 'react';
import PropTypes from 'prop-types';
import typography from '../../Typography';
import WixComponent from '../../BaseComponents/WixComponent';

export default class TextLinkLayout extends WixComponent {

  static propTypes = {
    children: PropTypes.node,
    underlineStyle: PropTypes.oneOf(['always', 'hover', 'never']),
    darkBackground: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    display: PropTypes.oneOf(['block', 'inline-block'])
  };

  static defaultProps = {
    underlineStyle: 'hover',
    darkBackground: false,
    size: 'medium',
    display: 'block'
  };

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      isHover: !this.state.isHover
    });
  }

  render() {
    const {isHover} = this.state;
    const {darkBackground, underlineStyle, size, children, display} = this.props;

    const color = darkBackground ? (isHover ? '#F0F4F7' : '#FFFFFF') : (isHover ? '#4EB7F5' : '#3899EC');

    const style = {
      color,
      display,
      background: 'none',
      cursor: 'pointer',
      textDecoration: ((underlineStyle === 'hover' && isHover) || underlineStyle === 'always') ? 'underline' : 'none'
    };

    const className = size === 'medium' ? typography.t1_3 : typography.t3_3;

    return (
      <div
        role="link"
        className={className}
        style={style}
        onMouseLeave={this.toggleHover}
        onMouseEnter={this.toggleHover}
        >
        {children}
      </div>
    );
  }
}
