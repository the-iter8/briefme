import React from "react";
import styles from "./ScrollingWrapper.module.css";

// This wrapper is currently being used in the  On this day and Stock Prices component.

export default function ScrollingWrapper({ children }) {
  return <div className={styles.root}>{children}</div>;
}
