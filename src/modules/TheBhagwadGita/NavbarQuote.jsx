import React from 'react';
import Text from '../../components/Text';
import FetchText from '../../components/FetchText/FetchText';

import styles from './NavbarQuote.module.css';

export default function NavbarQuote({ data }) {
  return (
    <div className={styles.root}>
      <Text size='xxs' weight='semi-bold' align='center'>
        {data?.translations[0]?.description}
      </Text>

      <FetchText />
    </div>
  );
}
