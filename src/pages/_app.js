import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/Text.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { useRouter } from "next/router";
import { checkUser } from "../utils/Firebase";
import LoadingPage from "../views/Loading/Loading";
import React, { useState, useEffect } from "react";
import { UserContextProvider } from "../utils/Contexts";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser((user) => {
      // A callback function.
      //Push a notification redirecting.
      // Check valid user == ankit?
      const path = router.pathname;
      setCurrentUser(user);
      if (user) {
        if (path != "/dashboard") router.push("/dashboard");
      } else {
        if (path != "/") router.push("/");
      }
      // For the loading thing.

      setLoading(false);
    });
  }, [currentUser]);

  return (
    <UserContextProvider
      value={{
        setCurrentUser,
        currentUser,
        setLoading,
        loading,
      }}
    >
      {loading ? <LoadingPage /> : <Component {...pageProps} />}
    </UserContextProvider>
  );
}

export default MyApp;
