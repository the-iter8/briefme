import React from "react";
import styles from "./Loading.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.root}>
      <img src='/loading.gif' alt='notworking' />
    </div>
  );
}
