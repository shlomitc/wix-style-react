import story from 'story';

story({
  category: '11. Pickers and Selectors',
  storyName: '11.5 ColorPicker',
  componentSrcFolder: 'ColorPicker',
  componentProps: setProps => ({
    value: '#3899eb',
    onChange: value => setProps({value: value.hex()})
  }),
  exampleProps: {
    onChange: ev => ev.hex(),
    onCancel: () => 'Cancelled',
    onConfirm: () => 'Confirmed'
  }
});
