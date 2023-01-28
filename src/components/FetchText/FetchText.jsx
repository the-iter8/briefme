import React, { useContext } from 'react';
import styles from './FetchText.module.css';
import Text from '../Text';
import { ISRTime } from '../../utils/Contexts';
export default function FetchText(props) {
  const { SWRTime, source } = props;
  const { fetchedISROn } = useContext(ISRTime);
  console.log(fetchedISROn);
  return (
    <span className={styles.root}>
      Fetched on {SWRTime ? SWRTime : fetchedISROn} from {source}
    </span>
  );
}
