import React from 'react';
import Button from 'wix-style-react/components/backoffice/Button';
import CoreButton from 'wix-style-react/components/core/Button';

const Example = () =>
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <CoreButton>Core</CoreButton>
    <Button>Backoffice</Button>
  </div>;

export default Example;
