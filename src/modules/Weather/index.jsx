import React from "react";
import SmallCard from "../../components/Cards/Small";

import styles from "./Weather.module.css";
import Text from "../../components/Text";

export default function Weather(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;

  return (
    <SmallCard
      title='24k Gold and Silver Prices.'
      source='Gold Price - Live'
      cardName='MetalPrice'
      isEdit={isEdit}
      keyID='WT'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    />
  );
}
