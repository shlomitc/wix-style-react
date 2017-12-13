import React from 'react';
import story from 'story';
import CodeExample from 'wix-storybook-utils/CodeExample';

import {Image} from 'wix-style-react/Icons';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

const children = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  <span key={1}>Hello <Image/></span>
];

story({
  category: 'Core',
  componentSrcFolder: 'Label',
  componentProps: {
    children: children[0]
  },
  exampleProps: {
    children
  },
  examples: (
    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard/>
    </CodeExample>
  )
});
