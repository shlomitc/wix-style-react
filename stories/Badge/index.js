import story from 'story';
import React from 'react';

import Text from 'wix-style-react/Text';
import Badge from 'wix-style-react/Badge';

story({
  category: 'Core',
  componentSrcFolder: 'Badge',
  componentProps: {
    children: 'I\'m a Badge!',
    dataHook: 'storybook-badge'
  },
  examples: (
    <div>
      <Text appearance="H0">I fly with alignment <Badge alignment="top">top</Badge></Text>
      <Text appearance="H0">I squeeze to <Badge>middle</Badge> by default</Text>
      <Text appearance="H0">I go down with alignment <Badge alignment="bottom">bottom</Badge></Text>
    </div>
  )
});
