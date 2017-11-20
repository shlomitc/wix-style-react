import React from 'react';
import CoreInput from 'wix-style-react/components/core/Input';
import Input from 'wix-style-react/components/backoffice/Input';

const Example = () =>
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <CoreInput/>
    <Input roundInput/>
  </div>;

export default Example;
