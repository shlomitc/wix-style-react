import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import Readme from '../../src/ButtonWithOptions/README.md';
import ExampleStandardComp from './ButtonWithOptionsStandard';
import ReadmeTestkit from '../../src/ButtonWithOptions/README.TESTKIT.md';


import ButtonWithOptions from 'wix-style-react/ButtonWithOptions';
import story from 'story';
import {Close} from 'wix-style-react/Icons';

// storiesOf('Core', module)
//   .add('ButtonWithOptions', () => {
//     return (
//       <TabbedView tabs={['API', 'Testkit']}>
//         <div>
//           <Markdown source={Readme}/>
//           <InteractiveCodeExample title="Customize a <ButtonWithOptions/>">
//             <ExampleStandardComp/>
//           </InteractiveCodeExample>
//         </div>
//         <div>
//           <Markdown source={ReadmeTestkit}/>
//         </div>
//       </TabbedView>
//     );
//   });


story({
  category: 'Core',
  componentSrcFolder: 'ButtonWithOptions',
  componentProps: {
    children: [
      <ButtonWithOptions.Button>
        Hello
      </ButtonWithOptions.Button>,
      <ButtonWithOptions.Option id="1">Option 1</ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="2" disabled>Option 2</ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="3"><Close size={'12px'}/> <span>Option 3</span></ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="4"><span>Option 4</span></ButtonWithOptions.Option>
    ],
    skin: 'none'
  }
})