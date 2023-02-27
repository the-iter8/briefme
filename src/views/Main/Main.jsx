import React from 'react';
import styles from './Main.module.css';
import Text from '../../components/Text/Text';

import AddWidgets from '../AddWidgets/AddWidgets';
export default function Main() {
  const NoPref = () => {
    return (
      <div className={styles.noPref}>
        <div className={styles.noPrefText}>
          <Text align='center' size='xxs' color='grey'>
            Currently, you don’t seem to have any active widgets,
          </Text>
          <Text align='center' size='xxs' color='grey'>
            Click the “Add Widgets” Button to get started!
          </Text>
          <AddWidgets />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.pref}></div>
      <NoPref />
    </div>
  );
}
