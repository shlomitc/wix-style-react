import React from 'react';
import {bool} from 'prop-types';
import CoreInput from '../../core/Input';
import {theme} from './theme';

const Input = ({roundInput, ...coreProps}) => (
  <CoreInput {...coreProps} theme={theme({roundInput})}/>
);

Input.propTypes = {
  ...CoreInput.propTypes,
  roundInput: bool
};

export default Input;
