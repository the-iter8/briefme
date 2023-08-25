import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import FetchText from "../../components/FetchText";
import styles from "./NavbarQuote.module.css";
import { bhagwadGitaRefs } from "../../utils/LocalData";
import { useBhagwadGitaQuote } from "../../api/Endpoints";

export default function NavbarQuote() {
  const day = new Date().getDate();
  const ref = day && bhagwadGitaRefs[day - 1];
  const fetchedData = useBhagwadGitaQuote(ref);
  console.log(fetchedData.data);
  return (
    <div className={styles.root}>
      <Text size='md' weight='heavy' align='center'>
        {fetchedData.isLoading || fetchedData.error
          ? "This is a dummy data, contact the developer if problem persists."
          : fetchedData.data?.translations[0].description}
      </Text>
      <FetchText source='The BhagwadGita API' SWRTime={fetchedData.requestTime} />
    </div>
  );
}
