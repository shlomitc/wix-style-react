import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/Composite/README.md';

import ExampleComposite from './ExampleComposite';
import ExampleCompositeRaw from '!raw-loader!./ExampleComposite';

storiesOf('Common', module)
  .add('Composites', () => (
    <div>
      <h1>Composites</h1>
      <Markdown source={Readme}/>
      <CodeExample title="Example usage of composition" code={ExampleCompositeRaw}>
        <p>
          Example below requires Label and Input as the only allowed children.
          And when rendering just changes their location.
        </p>
        <ExampleComposite/>
      </CodeExample>
    </div>
  ));
