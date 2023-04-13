import React from "react";
import SmallCard from "../../components/Cards/Small";

import styles from "./Weather.module.css";
import Text from "../../components/Text";
import Rainy from "../../icons/Rainy";
export default function Weather(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;

  const SectionOne = () => {
    return (
      <div className={styles.root}>
        <div className={styles.upperDiv}>
          <Text size='xs' weight='bold'>
            Clear | 13.99 C
          </Text>{" "}
          <Text size='xxxs'>Wind : 2.76 km/s</Text>
        </div>
        <div className={styles.lowerDiv}>
          <div>
            <Text size='xxxs'>Temp Min : 11.4 C</Text>
            <Text size='xxxs'>Temp Max : 11.4 C</Text>
          </div>
          <span>
            <Rainy />
          </span>
        </div>
      </div>
    );
  };

  return (
    <SmallCard
      isEdit={isEdit}
      keyID='WT'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
      title='Stock Prices'
    >
      <SectionOne />
    </SmallCard>
  );
}
