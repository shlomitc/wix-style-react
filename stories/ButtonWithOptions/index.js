import React from 'react';
import ButtonWithOptions from 'wix-style-react/ButtonWithOptions';
import story from 'story';
import {Close} from 'wix-style-react/Icons';

story({
  category: 'Core',
  componentSrcFolder: 'ButtonWithOptions',
  componentProps: {
    children: [
      <ButtonWithOptions.Button>
        <span>Hello</span>
      </ButtonWithOptions.Button>,
      <ButtonWithOptions.Option id="1">Option 1</ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="2" disabled>Option 2</ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="3"><Close size={'12px'}/> <span>Option 3</span></ButtonWithOptions.Option>,
      <ButtonWithOptions.Option id="4"><span>Option 4</span></ButtonWithOptions.Option>
    ],
    skin: 'none'
  }
});
