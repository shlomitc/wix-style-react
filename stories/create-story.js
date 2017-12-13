import {storiesOf} from '@storybook/react';
import story from 'wix-storybook-utils/Story';

// yes, there is duplication
// no, you can't DRY it, webpack parses `require.context` as-is, meaning no dynamic parts allowed
const contextualImport = require.context('../src', true, /^((?!test-common|assets|providers|spec|e2e|driver|protractor).)+$/);
const rawContextualImport = require.context('!raw-loader!../src', true, /^((?!test-common|assets|providers|spec|e2e|driver|protractor).)+$/);

const importWith = importer => path =>
  new Promise(resolve => resolve(importer(path)));

export default config =>
  story({
    storiesOf,
    contextualImport: importWith(contextualImport),
    rawContextualImport: importWith(rawContextualImport),
    moduleName: 'wix-style-react',
    repoBaseURL: 'https://github.com/wix/wix-style-react/tree/master/src/',
    ...config
  });
