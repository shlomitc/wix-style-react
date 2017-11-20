import React from 'react';
import {node} from 'prop-types';

const Suffix = ({children}) => <span style={{paddingLeft: '10px'}}>{children}</span>;

Suffix.propTypes = {
  children: node.isRequired
};

Suffix.displayName = 'Button.Suffix';

export default Suffix;
