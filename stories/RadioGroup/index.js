import React from 'react';
import story from 'story';
import RadioGroup from 'wix-style-react/RadioGroup';

const exampleChildren = [
  [1, 2, 3, 4].map(n =>
    <RadioGroup.Radio key={n} value={n} children={`Option ${n}`}/>),

  [1, 2, 3, 4].map(n =>
    <RadioGroup.Radio key={n} value={n} children={`אופציה ${n}`}/>),

  [
    <RadioGroup.Radio key={0} value={1}>
      <div>Option 1</div>
      <small>best option</small>
    </RadioGroup.Radio>,
    <RadioGroup.Radio key={1} value={2}>
      <div>Option 2</div>
      <small>Also pretty good option</small>
    </RadioGroup.Radio>
  ]
];

story({
  category: '4. Selection',
  storyName: '4.3 Radio Button Group',
  componentSrcFolder: 'RadioGroup',
  componentProps: setState => ({
    value: 1,
    children: exampleChildren[0],
    onChange: value => setState({value}),
    dataHook: 'storybook-radiogroup'
  }),
  exampleProps: {
    children: exampleChildren,
    onChange: value => value
  }
});
