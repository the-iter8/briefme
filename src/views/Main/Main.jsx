import React from 'react';
import styles from './Main.module.css';
import Text from '../../components/Text';
import Button from '../../components/Button/Button';
export default function Main() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.noPref}>
        <div className={styles.noPrefText}>
          <Text align='center' size='xxs' color='grey'>
            Currently, you don’t seem to have any active widgets,
          </Text>
          <Text align='center' size='xxs' color='grey'>
            Click the “Add Widgets” Button to get started!
          </Text>
          <Button fontSize='xxxs'>Add Widgets</Button>
        </div>
      </div>
      <div className={styles.pref}></div>
    </div>
  );
}
