import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/DropdownComposite/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('3. Inputs', module)
  .add('3.5 Dropdown Composite', () =>
    <div>
      <Markdown source={Readme}/>

      <InteractiveCodeExample title="Customize a <DropdownComposite/>">
        <ExampleStandard/>
      </InteractiveCodeExample>
    </div>
  );
