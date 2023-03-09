import React from 'react';
import Text from '../../components/Text/Text';
import FetchText from '../../components/FetchText/FetchText';

import styles from './NavbarQuote.module.css';

export default function NavbarQuote({ data }) {
  return (
    <div className={styles.root}>
      <Text size='sm' weight='semi-bold' align='center'>
        {data?.translations[0]?.description}
      </Text>

      <FetchText source='The BhagwadGita API' />
    </div>
  );
}
