import React, { useEffect, useState, useContext } from "react";

import Main from "../views/Main/";
import Navbar from "../views/Navbar";
import InsModal from "../views/InsModal";
import { UserContext } from "../utils/Contexts";
import { getUserData } from "../utils/Firebase";
import { bhagwadGitaRefs } from "../utils/data";
import {
  useTime,
  useWikiData,
  useGoldPrices,
  useGoldPricesTest,
  useBhagwadGitaQuote,
  useStockPrice,
} from "../api/Endpoints";
import { ISRTimeProvider, DataContextProvider } from "../utils/Contexts";

export default function Dashboard({ bhagwadGitaData, fetchedISROn, metalData, wikiData, stockData }) {
  // see the fetched on is going to be used at many places and we cant just use it in the context because of the fact that all the things will reload if the context is changed. Now the ISR context changes and the whole application under it rerenders, but it does not matters as the SWR are already on the client side and can send multiple request.s
  //the below state will be totally dependant on the firebase's function and very specific to the actual displaying card.
  // we are setting the preferance locally first in the "addwidget" through respective cards then onClick of the save button we send it to FireStore. We are just using the user's preferance defined down below as the starting point of our prefrance in addwidgets.
  // addwidgets will have its own array of available cards.

  const { currentUser, setLoading } = useContext(UserContext);
  const [openInsModal, setOpenInsModal] = useState(true);
  const [openEditPref, setOpenEditPref] = useState(false);
  const [fetchedUserData, setFetchedUserData] = useState(null);
  const [userPref, setUserPref] = useState([]);

  // Open Edit Pref updates onchange of modal.

  // Making the ins Modal available to normal users.

  useEffect(() => {
    if (currentUser) {
      getUserData(currentUser).then((resp) => {
        const { userData, exists } = resp;
        setOpenInsModal(Boolean(exists));

        if (exists) {
          setFetchedUserData(userData);
          setUserPref(userData.pref);
        }
      });
      setLoading(false);
    }
  }, [currentUser]);
  // Removed the insModal here from UseEffect, hence the profile wont change if new user logs in NEED TO ADD IT OR FIX IT SOMEHOW.

  return (
    <>
      <ISRTimeProvider value={{ fetchedISROn }}>
        <Navbar
          data={bhagwadGitaData}
          prefModal={{ openEditPref, setOpenEditPref }}
          userData={fetchedUserData}
          setOpenInsModal={setOpenInsModal}
        />
        <DataContextProvider value={{ userPref }}>
          <Main prefModal={{ openEditPref, setOpenEditPref }} data={{ metalData, wikiData, stockData }} />
        </DataContextProvider>
      </ISRTimeProvider>
      <InsModal toggleData={{ openInsModal, setOpenInsModal, fetchedUserData }} />
    </>
  );
}

export async function getStaticProps() {
  const { timeData } = await useTime();
  const { time, day, month } = timeData;
  const fetchedISROn = { time, day, month };

  const ref = day && bhagwadGitaRefs[day];
  const { bhagwadGitaData } = await useBhagwadGitaQuote(ref);

  //For testing the gold prices.

  const { metalData } = await useGoldPricesTest();
  const { wikiData } = await useWikiData({ month, day });
  const { stockData } = await useStockPrice();

  return {
    props: {
      bhagwadGitaData: bhagwadGitaData?.translations[0]?.description,
      fetchedISROn,
      metalData,
      stockData,
      wikiData: wikiData?.selected,
    },
    revalidate: 86400,
  };
}
