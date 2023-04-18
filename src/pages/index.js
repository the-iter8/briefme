import Head from "next/head";
import { UserContext } from "../utils/Contexts";
import styles from "../styles/Landing.module.css";
import React, { useContext } from "react";

import { loginWithRedirect } from "../utils/Firebase";

export default function Home() {
  const { setCurrentUser } = useContext(UserContext);

  async function loginHandle() {
    const { user } = await loginWithRedirect();
    setCurrentUser(user);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Brief Me</title>
        <meta name='description' content='Dashboard' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'></link>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'></link>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'></link>
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>

      <div className='btnContainer'>
        <button
          className='btn'
          onClick={() => {
            loginHandle();
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, eos! Login.
        </button>
      </div>
    </div>
  );
}
