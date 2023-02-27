import React, { useContext } from 'react';
import styles from './FetchText.module.css';
import { ISRTime } from '../../utils/Contexts';
export default function FetchText(props) {
  const { SWRTime, source, small } = props;
  const { fetchedISROn } = useContext(ISRTime);

  return small ? (
    <span className={styles.rootSmall}>
      Fetched on {SWRTime ? SWRTime : fetchedISROn} from {source}
    </span>
  ) : (
    <span className={styles.root}>
      Fetched on {SWRTime ? SWRTime : fetchedISROn} from {source}
    </span>
  );
}
