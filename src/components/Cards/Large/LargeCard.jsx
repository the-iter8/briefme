import styles from './LargeCard.module.css';
import React from 'react';

export default function LargeCard({ cardName }) {
  return <div className={styles.root}>{cardName}</div>;
}
