import React from "react";
import LargeCard from "../../components/Cards/Large";
import Gold from "../../icons/Gold";
import Silver from "../../icons/Silver";
import MetalStack from "../../icons/MetalStack";
import styles from "./MetalPrices.module.css";
import Text from "../../components/Text";
import { GoldPriceStub } from "../../utils/LocalData";
export default function MetalPrice(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;

  const SectionOne = ({ SVG, title, priceUSD, priceINR }) => {
    return (
      <div className={styles.sectionOne}>
        <div className={styles.SVGDiv}>{SVG}</div>
        <div className={styles.priceDiv}>
          <Text size='xs' align='right'>
            {title}
          </Text>
          <Text size='xs' weight='bold' align='right'>
            {priceUSD}
          </Text>
          <Text size='xs' weight='bold' align='right'>
            {priceINR}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <LargeCard
      title='24k Gold and Silver Prices.'
      source='Gold Price - Live'
      isEdit={isEdit}
      keyID='MP'
      SVG={MetalStack}
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <SectionOne
        SVG={<Gold />}
        title='Current Gold Price'
        priceUSD={isEdit || !data ? `${GoldPriceStub.gold} USD/Oz` : `${data?.gold} USD/Oz`}
        priceINR=''
      />
      <SectionOne
        SVG={<Silver />}
        title='Current Silver Price'
        priceUSD={isEdit || !data ? `${GoldPriceStub.silver} USD/Oz` : `${data?.silver} USD/Oz`}
        priceINR=''
      />
    </LargeCard>
  );
}
