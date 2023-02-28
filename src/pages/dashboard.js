import Main from '../views/Main/Main';
import Navbar from '../views/Navbar/Navbar';
import InsModal from '../views/InsModal/InsModal';
// import { getAvailData } from '../utils/LocalData';
import { UserContext } from '../utils/Contexts';
import React, { useEffect, useState, useContext } from 'react';
import { getPref } from '../utils/Firebase';
import { bhagwadGitaRefs } from '../utils/data';
import { useBhagwadGitaQuote, useTime } from '../api/Endpoints';
import { ISRTimeProvider, DataContextProvider } from '../utils/Contexts';

export default function Dashboard({ bhagwadGitaData, fetchedISROn }) {
  const { currentUser } = useContext(UserContext);

  // see the fetched on is going to be used at many places and we cant just use it in the context because of the fact that all the things will reload if the context is changed. Now the ISR context changes and the whole application under it rerenders, but it does not matters as the SWR are already on the client side and can send multiple request.s

  //the below state will be totally dependant on the firebase's function and very specific to the actual displaying card.

  // we are setting the preferance locally first in the "addwidget" through respective cards then onClick of the save button we send it to FireStore. We are just using the user's preferance defined down below as the starting point of our prefrance in addwidgets.
  // addwidgets will have its own array of available cards.

  const [userPref, setUserPref] = useState([]);

  useEffect(() => {
    getPref(currentUser).then((resp) => {
      setUserPref(resp);
    });
  }, []);

  return (
    <>
      <ISRTimeProvider value={{ fetchedISROn }}>
        <Navbar data={bhagwadGitaData} />
        <DataContextProvider value={{ userPref }}>
          <Main />
        </DataContextProvider>
      </ISRTimeProvider>
      <InsModal />
    </>
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
