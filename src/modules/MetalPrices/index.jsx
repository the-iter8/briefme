import React from "react";
import LargeCard from "../../components/Cards/Large";
import Gold from "../../icons/Gold";
import Silver from "../../icons/Silver";
import MetalStack from "../../icons/MetalStack";
import styles from "./MetalPrices.module.css";
import Text from "../../components/Text";
import { GoldPriceStub } from "../../utils/LocalData";
export default function MetalPrices(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;

  const SectionOne = ({ SVG, title, priceUSD, priceReal }) => {
    return (
      <div className={styles.sectionOne}>
        <div className={styles.SVGDiv}>{SVG}</div>
        <div className={styles.priceDiv}>
          <Text size='xs' align='right' weight='heavy'>
            {title}
          </Text>
          <Text size='xs' weight='bold' align='right'>
            {priceUSD}
          </Text>
          <Text
            size='xxs'
            variant='a'
            color='info'
            weight='bold'
            align='right'
            className={styles.knowMore}
            href={`https://www.google.com/search?q=${priceReal}+to+INR`}
          >
            Know in INR/Oz
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
        priceReal={isEdit || !data ? GoldPriceStub.gold : data?.gold}
      />
      <SectionOne
        SVG={<Silver />}
        title='Current Silver Price'
        priceUSD={isEdit || !data ? `${GoldPriceStub.silver} USD/Oz` : `${data?.silver} USD/Oz`}
        priceReal={isEdit || !data ? GoldPriceStub.silver : data?.silver}
      />
    </LargeCard>
  );
}
