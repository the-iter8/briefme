import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';
import Gold from '../../icons/Gold';
import MetalStack from '../../icons/MetalStack';
import styles from './MetalPrices.module.css';

export default function MetalPrice(props) {
  const { isEdit } = props;
  return (
    <LargeCard
      title='24k Gold and Silver Prices.'
      source='Gold Price - Live'
      cardName='MetalPrice'
      isEdit={isEdit}
      SVG={MetalStack}
    />
  );
}
