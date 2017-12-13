import story from 'story';

story({
  category: 'Core',
  componentSrcFolder: 'TimeInput', // TODO: move folder to TimePicker to align with component name
  storyName: 'TimePicker',
  componentProps: {
  },
  exampleProps: {
    onChange: moment => moment.format('h:mm a')
  }
});
