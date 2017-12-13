import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/Composite/FieldWithSelectionComposite/README.md';
import ExampleStandard from './ExampleStandard';

storiesOf('3. Inputs', module)
  .add('3.3 Field With Selection', () =>
    <div>
      <Markdown source={Readme}/>

      <InteractiveCodeExample title="Customize a <FieldWithSelection/>">
        <ExampleStandard/>
      </InteractiveCodeExample>
    </div>
  );
