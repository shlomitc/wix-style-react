import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from 'wix-storybook-utils/Markdown';
import TabbedView from 'wix-storybook-utils/TabbedView';
import ReadmeTestKit from '../../src/PopoverMenu/README.TESTKIT.md';

storiesOf('Core', module)
  .add('PopoverMenu', () =>
    <TabbedView tabs={['TestKits']}>
      <Markdown source={ReadmeTestKit}/>
    </TabbedView>
  );
