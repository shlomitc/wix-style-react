import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import Readme from '../../src/TextField/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('3. Inputs', module)
  .add('3.1 Text Field', () =>
    <div>
      <Markdown source={Readme}/>
      <InteractiveCodeExample title="Customize a <TextField/>">
        <ExampleStandard/>
      </InteractiveCodeExample>
    </div>
  );
