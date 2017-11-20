import React from 'react';
import {object} from 'prop-types';
import {styles} from './styles';
import Button from './Button';
import {generateClasses} from '../JSS';

const ThemedButon = ({theme, ...coreProps}) =>
  <Button {...coreProps} classes={generateClasses(styles(theme))}/>;

ThemedButon.propTypes = {
  theme: object
};

export default ThemedButon;
