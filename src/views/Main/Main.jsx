import React, { useContext } from 'react';
import styles from './Main.module.css';
import dynamic from 'next/dynamic';
import Text from '../../components/Text/Text';
import { DataContext } from '../../utils/Contexts';
import AddWidgets from '../AddWidgets/AddWidgets';

//Dynamic Imports
const MetalPrices = dynamic(
  () => import('../../modules/MetalPrices/MetalPrices'),
  { loading: () => 'Loading...' }
);
const StockPrices = dynamic(
  () => import('../../modules/StockPrices/StockPrices'),
  { loading: () => 'Loading...' }
);

export default function Main() {
  const { userPref } = useContext(DataContext);
  const sortedUserArr = userPref?.sort((a, b) => {
    return a.id - b.id;
  });
  const availCardArray = [
    {
      id: 0,
      keyID: 'MP',
      comp: <MetalPrices />,
    },
    {
      id: 1,
      comp: <StockPrices />,
      keyID: 'SP',
    },
  ].filter((item, index) => {
    return sortedUserArr[index]?.keyID === item?.keyID;
  });

  const NoPref = () => {
    return (
      <div className={styles.noPref}>
        <div className={styles.noPrefText}>
          <Text align='center' size='xxs' color='grey'>
            Currently, you don’t seem to have any active widgets,
          </Text>
          <Text align='center' size='xxs' color='grey'>
            Click the “Add Widgets” Button to get started!
          </Text>
          <AddWidgets />
        </div>
      </div>
    );
  };
  console.log(userPref, 'inside main');
  return (
    <div className={styles.root}>
      {userPref?.length !== 0 ? (
        <div className={styles.pref}>
          {availCardArray?.map((item, index) => {
            console.log(item);
            return <div key={index}>{item.comp}</div>;
          })}
        </div>
      ) : (
        <NoPref />
      )}
    </div>
  );
}
