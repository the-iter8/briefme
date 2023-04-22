import Head from "next/head";
import React from "react";
import Landing from "../views/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brief Me</title>
        <meta name='description' content='Dashboard' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'></link>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'></link>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'></link>
        <link rel='manifest' href='/site.webmanifest'></link>
        {/* Temp addn of fonts for landing page.  */}
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&family=Open+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <Landing />
    </div>
  );
}
