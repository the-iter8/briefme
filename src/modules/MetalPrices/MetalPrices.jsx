import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';
import Gold from '../../icons/Gold';
import Silver from '../../icons/Silver';
import MetalStack from '../../icons/MetalStack';
import styles from './MetalPrices.module.css';
import Text from '../../components/Text/Text';

export default function MetalPrice(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;
  const SectionOne = ({ SVG, title, priceUSD, priceINR }) => {
    return (
      <div className={styles.sectionOne}>
        <div className={styles.SVGDiv}>{SVG}</div>
        <div className={styles.priceDiv}>
          <Text size='tiny' align='right'>
            {title}
          </Text>
          <Text size='xxxs' weight='bold' align='right'>
            {priceUSD}
          </Text>
          <Text size='xxxs' weight='bold' align='right'>
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
      cardName='MetalPrice'
      isEdit={isEdit}
      keyID='MP'
      SVG={MetalStack}
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <SectionOne
        SVG={<Gold />}
        title='Current Gold Price'
        priceUSD={isEdit ? '29933 USD/Oz' : `${data?.gold} USD/Oz`}
        priceINR=''
      />
      <SectionOne
        SVG={<Silver />}
        title='Current Silver Price'
        priceUSD={isEdit ? '14234 USD/Oz' : `${data?.silver} USD/Oz`}
        priceINR=''
      />
    </LargeCard>
  );
}
