import React, { useEffect, useState, useContext } from 'react';

import Main from '../views/Main/Main';
import Navbar from '../views/Navbar/Navbar';
import InsModal from '../views/InsModal/InsModal';
import { UserContext } from '../utils/Contexts';
import { getUserData } from '../utils/Firebase';
import { bhagwadGitaRefs } from '../utils/data';
import {
  useTime,
  useGoldPrices,
  useGoldPricesTest,
  useBhagwadGitaQuote,
} from '../api/Endpoints';
import { ISRTimeProvider, DataContextProvider } from '../utils/Contexts';

export default function Dashboard({
  bhagwadGitaData,
  fetchedISROn,
  metalData,
}) {
  const { currentUser, setLoading } = useContext(UserContext);
  // see the fetched on is going to be used at many places and we cant just use it in the context because of the fact that all the things will reload if the context is changed. Now the ISR context changes and the whole application under it rerenders, but it does not matters as the SWR are already on the client side and can send multiple request.s
  //the below state will be totally dependant on the firebase's function and very specific to the actual displaying card.
  // we are setting the preferance locally first in the "addwidget" through respective cards then onClick of the save button we send it to FireStore. We are just using the user's preferance defined down below as the starting point of our prefrance in addwidgets.
  // addwidgets will have its own array of available cards.

  //Locally bhi set kro bhiia

  const [openInsModal, setOpenInsModal] = useState(true);
  const [openEditPref, setOpenEditPref] = useState(false);

  const [fetchedUserData, setFetchedUserData] = useState({});
  const [userPref, setUserPref] = useState([]);

  // Open Edit Pref updates onchange of modal.
  useEffect(() => {
    if (currentUser) {
      getUserData(currentUser).then((resp) => {
        setLoading(false);
        const { userData, exists } = resp;
        setOpenInsModal(Boolean(exists));
        if (exists) {
          setFetchedUserData(userData);
          setUserPref(userData.pref);
        }
      });
    }
  }, [currentUser, openInsModal]);

  return (
    <>
      <ISRTimeProvider value={{ fetchedISROn }}>
        <Navbar
          data={bhagwadGitaData}
          prefModal={{ openEditPref, setOpenEditPref }}
          userData={fetchedUserData}
        />
        <DataContextProvider value={{ userPref }}>
          <Main
            prefModal={{ openEditPref, setOpenEditPref }}
            data={{ metalData }}
          />
        </DataContextProvider>
      </ISRTimeProvider>
      <InsModal toggle={{ openInsModal, setOpenInsModal }} />
    </>
  );
}

export async function getStaticProps() {
  const { timeData } = await useTime();
  const { time, day, month } = timeData;
  const fetchedISROn = { time, day, month };

  const ref = day && bhagwadGitaRefs[day];
  const { bhagwadGitaData } = await useBhagwadGitaQuote(ref);
  const { metalData } = await useGoldPricesTest();

  return {
    props: {
      bhagwadGitaData,
      fetchedISROn,
      metalData,
    },
    revalidate: 86400,
  };
}
