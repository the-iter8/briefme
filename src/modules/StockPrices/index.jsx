import React from "react";
import LargeCard from "../../components/Cards/Large";
import styles from "./StockPrices.module.css";
import Text from "../../components/Text";
import Stock from "../../icons/Stock";
import ScrollingWrapper from "../../components/ScrollingWrapper";
import { StockPriceStub } from "../../utils/LocalData";

export default function StockPrices(props) {
  const { isEdit, localUserPref, setLocalUserPref, data } = props;

  const SectionOne = ({ data }) => {
    return (
      <div className={styles.sectionOne}>
        <div className='flex gap-3 flex-between'>
          <Text weight='heavy' size='xs'>
            {data["Global Quote"]["01. symbol"]}
          </Text>
          <Text size='xxs' weight='heavy'>
            Current Price:{" "}
            <Text variant='span' weight='heavy' size='xxs'>
              {parseFloat(data["Global Quote"]["05. price"]).toFixed(0)} INR
            </Text>
          </Text>
        </div>
        <div className='flex flex-between'>
          <div className={styles.priceDiv}>
            <Text size='xxs' weight='bold'>
              Open : {parseFloat(data["Global Quote"]["02. open"]).toFixed(0)}
            </Text>
            <Text size='xxs' weight='bold'>
              High : {parseFloat(data["Global Quote"]["03. high"]).toFixed()}
            </Text>
            <Text size='xxs' weight='bold'>
              Low : {parseFloat(data["Global Quote"]["04. low"]).toFixed()}
            </Text>
          </div>
          <div className={styles.priceDiv}>
            <Text size='xxs' weight='bold' align='right'>
              Previous Close : {parseFloat(data["Global Quote"]["08. previous close"]).toFixed()}
            </Text>
            <Text size='xxs' weight='bold' align='right'>
              Change Percent : {parseFloat(data["Global Quote"]["10. change percent"]).toFixed()}
            </Text>
            <Text size='xxs' weight='bold' align='right'>
              Change : {parseFloat(data["Global Quote"]["09. change"]).toFixed()} INR
            </Text>
          </div>
        </div>
      </div>
    );
  };

  return (
    <LargeCard
      title='Stock Prices'
      source='Alpha Vantage'
      isEdit={isEdit}
      keyID='SP'
      SVG={Stock}
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <ScrollingWrapper>{<SectionOne data={isEdit || !data ? StockPriceStub : data} />}</ScrollingWrapper>
    </LargeCard>
  );
}
