import React from 'react';
import styles from './Button.module.css';
import Text from '../Text/Text';

export default function Button(props) {
  const { children, icon, id, fontSize, size, fontWeight, onClick } = props;
  const padding = size == 'large' ? '1em 2em' : '0.5em 1.0rem';

  return (
    <button
      id={id}
      style={{ padding: padding }}
      className={styles.btn}
      onClick={onClick}
    >
      {icon}
      <Text size={fontSize} weight={fontWeight}>
        {children}
      </Text>
    </button>
  );
}
