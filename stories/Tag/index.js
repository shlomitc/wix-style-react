import story from 'story';

story({
  category: 'Core',
  componentSrcFolder: 'Tag',
  componentProps: {
    children: 'Hello World'
  },
  exampleProps: {
    onRemove: () => 'Removed!'
  }
});
