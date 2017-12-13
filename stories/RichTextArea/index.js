import React from 'react';
import {storiesOf} from '@storybook/react';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';

import ReadmeTestkit from '../../src/RichTextArea/README.TESTKIT.md';
import ReadMe from '../../src/RichTextArea/README.md';
import RichTextAreaExample from './RichTextAreaExample';

storiesOf('Core', module)
  .add('RichTextArea', () => (
    <TabbedView tabs={['API', 'Testkit']}>
      <div>
        <Markdown source={ReadMe}/>
        <InteractiveCodeExample title="Customize a <RichTextArea/>">
          <RichTextAreaExample/>
        </InteractiveCodeExample>
      </div>

      <Markdown source={ReadmeTestkit}/>
    </TabbedView>
  ));
