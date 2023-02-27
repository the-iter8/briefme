import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';
import Gold from '../../icons/Gold';
import Silver from '../../icons/Silver';
import MetalStack from '../../icons/MetalStack';
import styles from './MetalPrices.module.css';
import Text from '../../components/Text/Text';

export default function MetalPrice(props) {
  const { isEdit } = props;
  const SectionOne = ({ SVG, title, priceUSD, priceINR }) => {
    return (
      <div className={styles.sectionOne}>
        <div className={styles.SVGDiv}>{SVG}</div>
        <div className={styles.priceDiv}>
          <Text size='tiny' align='left'>
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
      keyName='MP'
      //If it is isEdit then we wont send the data.
      SVG={MetalStack}
    >
      <div className={styles.mainContent}>
        <SectionOne
          SVG={<Gold />}
          title='Current Gold Price'
          priceUSD='29933 USD/Oz'
          priceINR='30000 INR/Oz'
        />
        <SectionOne
          SVG={<Silver />}
          title='Current Silver Price'
          priceUSD='14234 USD/Oz'
          priceINR='20000 INR/Oz'
        />
      </div>
    </LargeCard>
  );
}
