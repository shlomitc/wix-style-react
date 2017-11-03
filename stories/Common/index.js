import React from 'react';

import story from '../utils/Components/Story';
import CodeExample from '../utils/Components/CodeExample';

import ExampleHeadersTypography from './ExampleHeadersTypography';
import ExampleHeaderTypographyRaw from '!raw-loader!./ExampleHeadersTypography';

import ExampleTextTypography from './ExampleTextTypography';
import ExampleTextTypographyRaw from '!raw-loader!./ExampleTextTypography';

const children = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  'Hello World! '.repeat(5)
];

story({
  category: 'Common',
  storyName: 'Typography',
  componentSrcFolder: 'Text',
  componentProps: {
    children: 'Hello, World!'
  },
  exampleProps: {
    children
  },
  examples: (
    <div>
      <CodeExample title="Headers" code={ExampleHeaderTypographyRaw}>
        <ExampleHeadersTypography/>
      </CodeExample>

      <CodeExample title="Text" code={ExampleTextTypographyRaw}>
        <ExampleTextTypography/>
      </CodeExample>
    </div>
  )
});
