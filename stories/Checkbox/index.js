import React from 'react';

import {Languages} from 'wix-style-react/Icons';
import story from 'story';

const labelExamples = [
  'Hello World!',
  <span key={0}>Hello <strong>World!</strong></span>,
  <span key={1}>Hello <Languages/></span>
];

story({
  category: '4. Selection',
  storyName: '4.2 Checkbox',
  componentSrcFolder: 'Checkbox',

  componentProps: setState => ({
    children: labelExamples[0],
    onChange: ({target: {checked}}) => setState({checked}),
    dataHook: 'storybook-checkbox'
  }),

  exampleProps: {
    children: labelExamples,
    onChange: ({target: {checked}}) => checked ? 'Checked' : 'Unchecked'
  }
});
