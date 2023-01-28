import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/Text.css';

import React, { useState, useEffect } from 'react';
import { checkUser } from '../utils/Firebase';
import { useRouter } from 'next/router';
import { UserContextProvider } from '../utils/Contexts';

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
        if (path == '/api') console.log('api');
        if (path != '/dashboard') router.push('/dashboard');
      } else {
        if (path != '/') router.push('/');
      }
      // For the loading thing.
      setTimeout(() => {
        setLoading(false);
      }, 100);
    });
  }, [currentUser]);

  return (
    <UserContextProvider
      value={{
        setCurrentUser,
        currentUser,
      }}
    >
      {loading ? <p>Loading</p> : <Component {...pageProps} />}
    </UserContextProvider>
  );
}

export default MyApp;
