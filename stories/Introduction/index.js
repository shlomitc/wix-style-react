import React from 'react';
import {storiesOf} from '@storybook/react';

import AutoDocs from 'wix-storybook-utils/AutoDocs';
import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import AutoExampleSource from '!raw-loader!wix-storybook-utils/src/AutoExample';
import StorySource from '!raw-loader!wix-storybook-utils/src/Story';

import Readme from '../../README.md';
import TestsReadme from '../../docs/TESTS.md';
import Contribution from '../../docs/CONTRIBUTING.md';
import AddingStory from '../../docs/adding-story.md';
import TPA from '../../src/TPA/README.md';
import AutoDocsReadme from '../../docs/AutoDocs.md';
import UsageWithoutYoshiReadme from '../../docs/usage-without-yoshi.md';

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme}/>)
  .add('Testing', () => <Markdown source={TestsReadme}/>)
  .add('Contribution', () => <Markdown source={Contribution}/>)
  .add('TPA', () => <Markdown source={TPA}/>)
  .add('Usage Without Yoshi', () => <Markdown source={UsageWithoutYoshiReadme}/>)
  .add('Documenting components', () =>
    <TabbedView tabs={['Adding a Story', 'story( )', 'AutoDocs', 'AutoExample']}>
      <Markdown source={AddingStory}/>
      <AutoDocs source={StorySource} showTitle={false}/>
      <Markdown source={AutoDocsReadme}/>
      <AutoDocs source={AutoExampleSource}/>
    </TabbedView>
  );
