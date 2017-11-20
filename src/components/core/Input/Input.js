import React from 'react';
import {object} from 'prop-types';

export default class Input extends React.Component {
  static propTypes = {
    classes: object.isRequired
  }

  render() {
    return (
      <input className={this.props.classes.input}/>
    );
  }
}

