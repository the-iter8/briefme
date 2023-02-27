import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';

import styles from './StockPrices.module.css';

export default function StockPrices({ isEdit }) {
  return (
    <LargeCard
      title='24k Gold and Silver Prices.'
      cardName='StockPrice'
      source='Gold Price - Live'
      isEdit
    />
  );
}
