import '../styles/classes.css';
import '../styles/globals.css';
import '../styles/variables.css';

import React, { useState, useEffect } from 'react';
import { checkUser } from '../utils/Firebase';
import { useRouter } from 'next/router';

export const Context = React.createContext();
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = checkUser((user) => {
      // A callback function.
      setCurrentUser(user);
      // Check valid user == ankit?
      if (user) {
        router.push('/dashboard');
        //Push a notification redirecting.
      } else {
        router.push('/');
      }
      // For the loading thing.
      setTimeout(() => {
        setLoading(false);
      }, 100);
    });

    return unsubscribe;
  }, []);

  return (
    <Context.Provider
      value={{
        setCurrentUser,
        currentUser,
      }}
    >
      {loading ? <p>Loading</p> : <Component {...pageProps} />}
    </Context.Provider>
  );
}

export default MyApp;
