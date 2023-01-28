import React from 'react';
import styles from '../styles/Dashboard.module.css';

import Navbar from '../views/Navbar/Navbar';
import Main from '../views/Main/Main.jsx';
import InsModal from '../views/InsModal/InsModal';

import { ISRTimeProvider } from '../utils/Contexts';
import { bhagwadGitaRefs } from '../utils/data';
import { useBhagwadGitaQuote, useTime } from '../api/Endpoints';

export default function Dashboard({ bhagwadGitaData, fetchedISROn }) {
  // see the fetched on is going to be used at many places and we cant just use it in the context because of the fact that all the things will reload if the context is changed. Now the ISR context changes and the whole application under it rerenders, but it does not matters as the SWR are already on the client side and can send multiple request.s

  return (
    <div>
      <ISRTimeProvider value={{ fetchedISROn }}>
        <Navbar data={bhagwadGitaData} />
        <Main />
      </ISRTimeProvider>
      <InsModal />
    </div>
  );
}
export async function getStaticProps() {
  const { timeData } = await useTime();
  let { day_of_year, datetime } = timeData;
  const fetchedISROn = datetime.split('T')[1].split('.')[0];
  //ADD DATE AS WELL HERE IN THE FETCHED isr ON

  const ref = day_of_year && bhagwadGitaRefs[day_of_year];
  const { bhagwadGitaData } = await useBhagwadGitaQuote(ref);

  return {
    props: {
      bhagwadGitaData,
      fetchedISROn,
    },
    revalidate: 30,
  };
}
