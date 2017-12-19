import React from 'react';
// import {storiesOf} from '@storybook/react';
// import Markdown from 'wix-storybook-utils/Markdown';
// import TabbedView from 'wix-storybook-utils/TabbedView';
// import CodeExample from 'wix-storybook-utils/CodeExample';
//
// import ReadmeTestKit from '../../src/Selector/README.TESTKIT.md';
// import Readme from '../../src/Selector/README.md';
//
// import ExampleControlled from './ExampleControlled';
// import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

// storiesOf('Core', module)
//   .add('Selector', () =>
//     <TabbedView tabs={['API', 'TestKits']}>
//       <div>
//         <Markdown source={Readme}/>
//
//         <h1>Usage examples</h1>
//
//         <CodeExample title="Selector" code={ExampleControlledRaw}>
//           <ExampleControlled/>
//         </CodeExample>
//       </div>
//
//       <Markdown source={ReadmeTestKit}/>
//     </TabbedView>
//   );

import story from 'story';

story({
  category: 'Core',
  storyName: 'Selector',
  componentSrcFolder: 'Selector',
  componentProps: (setProps, getProps) => ({
    dataHook: 'storybook-selector',
    id: 1,
    title: 'Title',
    hasSubtitle: true,
    subtitle: 'Subtitle',
    isSelected: false,
    image: <img width="100%" height="100%" src="http://via.placeholder.com/100x100"/>,
    onToggle: () => {
      setProps({isSelected: !getProps().isSelected});
    }
    // isOpen: true,
    // title: 'Choose Your Items',
    // cancelButtonText: 'Cancel',
    // okButtonText: 'Select',
    // onClose: () => setProps({isOpen: false}),
    // dataSource: async () => new Promise(resolve => setTimeout(() => resolve(['rick', 'morty']), 2000))
  })
});
