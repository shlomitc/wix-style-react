import story from 'story';

story({
  category: 'Core',
  componentSrcFolder: 'ToggleSwitch',
  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-toggleswitch'
  })
});
