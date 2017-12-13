import React from 'react';
import story from 'story';

import CodeExample from 'wix-storybook-utils/CodeExample';

import LanguagePicker from 'wix-style-react/LanguagePicker';
import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';

const LOCALES = {
  cs: 'Čeština',
  da: 'Dansk',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिन्दी',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  no: 'Norsk',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  sv: 'Svenska',
  th: 'Thai',
  tr: 'Türkçe',
  zh: 'Chinese'
};

story({
  category: 'Core',
  componentSrcFolder: 'LanguagePicker',
  componentProps: {
    children: Object.keys(LOCALES).map(lang =>
      <LanguagePicker.Option key={lang} languageKey={lang}>
        {LOCALES[lang]}
      </LanguagePicker.Option>
    )
  },
  exampleProps: {
    onSelect: ({value}) => value
  },

  // TODO: update e2e to use generated example and remove `examples` below
  examples: (
    <CodeExample title="Example" code={ExampleRaw}>
      <Example/>
    </CodeExample>
  )
});
