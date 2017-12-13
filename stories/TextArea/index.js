import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import Readme from '../../src/TextArea/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('3. Inputs', module)
  .add('3.2 Text Area', () =>
    <div>
      <Markdown source={Readme}/>
      <InteractiveCodeExample title="Customize a <TextArea/>">
        <ExampleStandard/>
      </InteractiveCodeExample>
    </div>
  );
