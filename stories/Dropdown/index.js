import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/Dropdown/README.md';
import ReadmeTestkit from '../../src/Dropdown/README.TESTKIT.md';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw-loader!./ExampleControlled';

import ExampleWithCustomValue from './ExampleWithCustomValue';
import ExampleWithCustomValueRaw from '!raw-loader!./ExampleWithCustomValue';

storiesOf('Core', module)
  .add('Dropdown', () => (
    <TabbedView tabs={['API', 'Testkit']}>
      <div>
        <Markdown source={Readme}/>

        <h1>Usage examples</h1>

        <CodeExample title="Standard" code={ExampleStandardRaw}>
          <ExampleStandard/>
        </CodeExample>

        <CodeExample title="Controlled Dropdown" code={ExampleControlledRaw}>
          <ExampleControlled/>
        </CodeExample>

        <CodeExample title="Custom Values in Dropdown" code={ExampleWithCustomValueRaw}>
          <ExampleWithCustomValue/>
        </CodeExample>
      </div>

      <Markdown source={ReadmeTestkit}/>
    </TabbedView>
  ));
