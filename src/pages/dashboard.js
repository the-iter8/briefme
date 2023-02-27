import Main from '../views/Main/Main';
import Navbar from '../views/Navbar/Navbar';
import InsModal from '../views/InsModal/InsModal';
// import { getAvailData } from '../utils/LocalData';
import React, { useEffect, useState } from 'react';

import { bhagwadGitaRefs } from '../utils/data';
import { useBhagwadGitaQuote, useTime } from '../api/Endpoints';
import { ISRTimeProvider, DataContextProvider } from '../utils/Contexts';

export default function Dashboard({ bhagwadGitaData, fetchedISROn }) {
  // see the fetched on is going to be used at many places and we cant just use it in the context because of the fact that all the things will reload if the context is changed. Now the ISR context changes and the whole application under it rerenders, but it does not matters as the SWR are already on the client side and can send multiple request.s
  // useEffect(() => {}, []);

  // const [cardData, setCardData] = useState(getAvailData());

  return (
    <div>
      <ISRTimeProvider value={{ fetchedISROn }}>
        <Navbar data={bhagwadGitaData} />
        {/* <DataContextProvider value={{ cardData }}> */}
        <Main />
        {/* </DataContextProvider> */}
      </ISRTimeProvider>
      <InsModal />
    </div>
  );
}

export async function getStaticProps() {
  const { timeData } = await useTime();
  const { time, day, month } = timeData;
  const fetchedISROn = day + '/' + month + ' at ' + time;

  const ref = day && bhagwadGitaRefs[day];
  const { bhagwadGitaData } = await useBhagwadGitaQuote(ref);

  return {
    props: {
      bhagwadGitaData,
      fetchedISROn,
    },
    revalidate: 86400,
  };
}
