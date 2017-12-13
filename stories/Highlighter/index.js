import story from 'story';

import Highlighter from 'wix-style-react/Highlighter';
import source from '!raw-loader!wix-style-react/Highlighter/Highlighter';
import readmeTestkit from '../../src/Highlighter/README.TESTKIT.md';

story({
  category: 'Core',
  name: 'Highlighter',
  source,
  component: Highlighter,
  readmeTestkit,
  componentProps: () => ({
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur earum eius eum fugiat',
    dataHook: 'story-highlighter'
  })
});
