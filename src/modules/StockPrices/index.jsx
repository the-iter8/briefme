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
          <Text weight='semi-bold' size='xs'>
            {data["Global Quote"]["01. symbol"]}
          </Text>
          <Text size='xxs' weight='semi-bold'>
            Current Price :{" "}
            <Text variant='span' weight='semi-bold' size='xxs'>
              {parseFloat(data["Global Quote"]["05. price"]).toFixed(2)} INR
            </Text>
          </Text>
        </div>
        <div className='flex flex-between'>
          <div>
            <Text size='xxxs'>Open : {parseFloat(data["Global Quote"]["02. open"]).toFixed(2)}</Text>
            <Text size='xxxs'>High : {parseFloat(data["Global Quote"]["03. high"]).toFixed(2)}</Text>
            <Text size='xxxs'>Low : {parseFloat(data["Global Quote"]["04. low"]).toFixed(2)}</Text>
          </div>
          <div>
            <Text size='xxxs' align='right'>
              Previous Close : {parseFloat(data["Global Quote"]["08. previous close"]).toFixed(2)}
            </Text>
            <Text size='xxxs' align='right'>
              Change Percent : {parseFloat(data["Global Quote"]["10. change percent"]).toFixed(2)}
            </Text>
            <Text size='xxxs' align='right' weight='semi-bold'>
              Change : {parseFloat(data["Global Quote"]["09. change"]).toFixed(2)} INR
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
      <ScrollingWrapper>{<SectionOne data={isEdit ? StockPriceStub : data} />}</ScrollingWrapper>
    </LargeCard>
  );
}
