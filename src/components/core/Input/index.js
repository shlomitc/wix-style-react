import React from 'react';
import {object} from 'prop-types';
import styles from './styles';
import Input from './Input';
import {generateClasses} from '../JSS';

const ThemedInput = ({theme, ...coreProps}) =>
  <Input {...coreProps} classes={generateClasses(styles(theme))}/>;

ThemedInput.propTypes = {
  theme: object
};

export default ThemedInput;
