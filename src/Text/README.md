# `<Text/>`

General all purpose text component with Wix styling.

* Adds correct styling so you don't have to.
* Renders correct element (either `span` or `h1` - `h5`) depending on `appearance` (defaults to `span`)

1. Load Wix fonts from CDN:

```html
<link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
```

2. Use `<Text>` component with appropriate `appearance`:

```js
import Text from 'wix-style-react/Text';

export default () =>
  <div>
    <Text appearance="H0">Big Heading</Text>
    <Text>Anything goes...</Text>
  </div>;
```
