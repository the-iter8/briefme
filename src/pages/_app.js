import '../styles/classes.css';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/Text.css';

import React, { useState, useEffect } from 'react';
import { checkUser } from '../utils/Firebase';
import { useRouter } from 'next/router';


export const Context = React.createContext();
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // does not works! for loggin in?
  
  useEffect(() => {
    checkUser((user) => {
      // A callback function.
      //Push a notification redirecting.
      // Check valid user == ankit?
      setCurrentUser(user);
      if (user) {
        if (router.pathname != '/dashboard') router.push('/dashboard');
      } else {
        if (router.pathname != '/') router.push('/');
      }
      // For the loading thing.
      setTimeout(() => {
        setLoading(false);
      }, 100);
    });
  }, []);

  console.log(currentUser);
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
