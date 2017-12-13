import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Example, {CustomExample} from './Example';
import ExampleRaw from '!raw-loader!./Example';
import WixStyleDecorator from '../decorators/WixStyleDecorator';
import Readme from '../../../src/TPA/Badge/README.md';
import ReadmeTestKit from '../../../src/TPA/Badge/README.TESTKIT.md';

storiesOf('TPA', module)
  .addDecorator(WixStyleDecorator)
  .add('Badge POC', () =>
    <TabbedView tabs={['API', 'TestKits']}>
      <div>
        <Markdown source={Readme}/>
        <h1>Example</h1>
        <CodeExample title="Themes" code={ExampleRaw}>
          <Example/>
        </CodeExample>
        <CodeExample title="Themes" code={ExampleRaw}>
          <CustomExample/>
        </CodeExample>
      </div>
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  );
