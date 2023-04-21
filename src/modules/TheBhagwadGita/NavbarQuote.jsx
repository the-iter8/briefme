import React from "react";
import Text from "../../components/Text";
import FetchText from "../../components/FetchText";

import styles from "./NavbarQuote.module.css";

export default function NavbarQuote({ data }) {
  return (
    <div className={styles.root}>
      <Text size='sm' weight='semi-bold' align='center'>
        {data ? data : "This is a dummy text, the API call has some issues, please contact the developer."}
      </Text>

      <FetchText source='The BhagwadGita API' />
    </div>
  );
}
