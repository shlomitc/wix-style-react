import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import InteractiveCodeExample from 'wix-storybook-utils/InteractiveCodeExample';

import Readme from '../../src/Breadcrumbs/README.md';

import ExampleBreadcrumbs from '../Breadcrubms/ExampleBreadcrumbs';

storiesOf('6. Navigation', module)
  .add('6.2 Breadcrumbs', () => (
    <div>
      <Markdown source={Readme}/>
      <a href="?selectedKind=Core&selectedStory=Breadcrumbs&full=0&down=0&left=1&panelRight=0">Please see Breadcrumbs examples for items and path manipulation</a>
      <InteractiveCodeExample title="Customize a <Breadcrumbs/>">
        <ExampleBreadcrumbs/>
      </InteractiveCodeExample>
    </div>
  ));
