import React, { useContext } from 'react';
import styles from './FetchText.module.css';
import { ISRTime } from '../../utils/Contexts';
export default function FetchText(props) {
  const { SWRTime, source, small } = props;
  const { fetchedISROn } = useContext(ISRTime);
  const fetchedTimeFormatted =
    fetchedISROn?.day + '/' + fetchedISROn?.month + ' at ' + fetchedISROn?.time;

  return small ? (
    <span className={styles.rootSmall}>
      Fetched on {SWRTime ? SWRTime : fetchedTimeFormatted} from {source}
    </span>
  ) : (
    <span className={styles.root}>
      Fetched on {SWRTime ? SWRTime : fetchedTimeFormatted} from {source}
    </span>
  );
}
