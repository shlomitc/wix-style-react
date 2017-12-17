import React from 'react';
import {storiesOf} from '@storybook/react';
import story from 'story';
import Page from '../../src/Page';
import Button from '../../src/Backoffice/Button';
import SomeContentComponent from './SomeContentComponent';
import Breadcrumbs from './Breadcrumbs';
import SomeTailComponent from './SomeTailComponent';

import s from './Page.scss';

const header = (
  <Page.Header
    breadcrumbs={Breadcrumbs}
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={(() => {
    })}
    actionsBar={(<Button>Action</Button>)}
    />
);

const content = (
  <Page.Content>
    <SomeContentComponent/>
  </Page.Content>
);

const tail = (
  <Page.Tail>
    <SomeTailComponent/>
  </Page.Tail>
);

const category = '10. Page';

story({
  category,
  storyName: '10.1 Page',
  name: 'Page',
  componentSrcFolder: 'Page',
  componentProps: {
    children: [header, tail, content],
    dataHook: 'story-page'
  },
  exampleProps: {
    backgroundImageUrl: [
      '',
      'https://static.wixstatic.com/media/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg/v1/fill/w_1000,h_250,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg'
    ]
  }
});

storiesOf(category, module)
  .add('10.2 Page example', () => (
    <div>
      <div className={s.siderBar}>Sidebar</div>
      <div className={s.bodyContent}>
        <div className={s.topBar}>TopBar</div>
        <Page>{[header, tail, content]}</Page>
      </div>
    </div>));
