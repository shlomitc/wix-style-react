import React from 'react';
import {node} from 'prop-types';

const Prefix = ({children}) => <span style={{paddingRight: '10px'}}>{children}</span>;

Prefix.propTypes = {
  children: node.isRequired
};

Prefix.displayName = 'Button.Prefix';

export default Prefix;
