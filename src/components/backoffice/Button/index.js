import React from 'react';
import {oneOf} from 'prop-types';
import CoreButton from '../../core/Button';
import {theme} from './theme';

const Button = ({height, skin, ...coreProps}) => (
  <CoreButton {...coreProps} theme={theme({height, skin})}/>
);

Button.propTypes = {
  ...CoreButton.propTypes,
  height: oneOf(['small', 'medium', 'large', 'x-large']),
  skin: oneOf(['standard', 'emptyStandard', 'danger', 'attention'])
};

Button.defaultProps = {
  height: 'medium',
  skin: 'standard'
};

export default Button;
