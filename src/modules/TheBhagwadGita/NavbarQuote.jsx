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
  const [data, setData] = useState("This is a dummy text, the API call has some issues, please contact the developer.");

  useEffect(() => {
    fetchedData.then((data) => {
      setData(data);
    });
  }, [fetchedData]);

  return (
    <div className={styles.root}>
      <Text size='md' weight='heavy' align='center'>
        {data.data?.translations[0].description}
      </Text>
      <FetchText source='The BhagwadGita API' SWRTime={data?.requestTime} />
    </div>
  );
}
