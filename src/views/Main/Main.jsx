import React, { useContext, useState } from 'react';
import styles from './Main.module.css';
import dynamic from 'next/dynamic';
import Text from '../../components/Text/Text';
import { DataContext } from '../../utils/Contexts';
import AddWidgets from '../AddWidgets/AddWidgets';
import Button from '../../components/Button/Button';
import Slide from '@mui/material/Slide';

//Dynamic Imports
const MetalPrices = dynamic(
  () => import('../../modules/MetalPrices/MetalPrices'),
  { loading: () => 'Loading...' }
);
const StockPrices = dynamic(
  () => import('../../modules/StockPrices/StockPrices'),
  { loading: () => 'Loading...' }
);
const OnThisDay = dynamic(() => import('../../modules/OnThisDay/OnThisDay'), {
  loading: () => 'Loading...',
});

export default function Main({ prefModal, data }) {
  const { userPref } = useContext(DataContext);
  const { openEditPref, setOpenEditPref } = prefModal;
  const { metalData, wikiData } = data;

  const sortedUserArr = userPref?.sort((a, b) => {
    return a.id - b.id;
  });

  const availCardArray = [
    {
      id: 0,
      keyID: 'MP',
      comp: <MetalPrices data={metalData} />,
    },
    {
      id: 1,
      keyID: 'OTD',
      comp: <OnThisDay data={wikiData} />,
    },
  ];

  let dispArr = [];
  availCardArray.forEach((item) => {
    sortedUserArr.forEach((sortItem) => {
      if (sortItem.keyID === item.keyID) {
        dispArr.push(item);
      }
    });
  });


  const NoPref = () => {
    return (
      <div className={styles.noPref}>
        <div className={styles.noPrefText}>
          <Text align='center' size='sm' color='grey'>
            Currently, you don’t seem to have any active widgets,
          </Text>
          <Text align='center' size='sm' color='grey'>
            Click the “Add Widgets” Button to get started!
          </Text>
          <Button
            fontSize='sm'
            onClick={() => {
              setOpenEditPref(true);
            }}
          >
            Add Widgets
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.root}>
      {userPref?.length !== 0 && openEditPref === false ? (
        <div className={styles.pref}>
          {dispArr?.map((item, index) => {
            return <div key={index}>{item.comp}</div>;
          })}
        </div>
      ) : (
        <NoPref />
      )}
      <AddWidgets prefModal={prefModal} />
    </div>
  );
}
