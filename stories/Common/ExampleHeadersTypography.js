import React from 'react';

import Text from 'wix-style-react/Text';
import styles from './styles.scss';

export default () =>
  <div>
    <Text appearance="H0">H0 - Helvetica_25 / 48 px</Text>
    <Text appearance="H1">H1 - Helvetica_35 / 36px</Text>
    <Text appearance="H2">H2 - Helvetica_45 / 20px</Text>
    <div className={styles.inverted}>
      <Text appearance="H2.1">H2.1 - Helvetica_45 / 20px</Text>
    </div>
    <Text appearance="H3">H3 - Helvetica_45 / 13px</Text>
    <Text appearance="H4">H4 - Helvetica_55 / 10px</Text>
  </div>;

