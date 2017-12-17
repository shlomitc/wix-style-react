import story from 'story';

import component from 'wix-ui-backoffice/dist/src/components/ToggleSwitch';
import source from '!raw-loader!wix-ui-backoffice/src/components/ToggleSwitch';

story({
  category: 'Core',
  name: 'ToggleSwitch',
  component,
  source,
  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-toggleswitch'
  })
});
