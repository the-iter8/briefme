import React from 'react';
import styles from './Button.module.css';
import Text from '../Text/Text';

export default function Button(props) {
  const {
    children,
    icon,
    fontSize,
    size,
    fontWeight,
    onClick,
    primary,
    color,
  } = props;
  const padding = size == 'large' ? '1em 2em' : '0.4em 0.9rem';

  return (
    <button
      style={{ padding: padding }}
      className={primary ? styles.primary : styles.btn}
      onClick={onClick}
    >
      {icon}
      <Text
        size={fontSize ? fontSize : 'md'}
        weight={fontWeight}
        color={color}
      >
        {children}
      </Text>
    </button>
  );
}
