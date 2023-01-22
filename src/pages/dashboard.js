import React, { useContext } from 'react';
import { Context } from './_app';
import styles from '../styles/Dashboard.module.css';

import Navbar from '../views/Navbar/Navbar';
import Main from '../views/Main/Main.jsx';
import InsModal from '../views/InsModal/InsModal';

export default function Dashboard() {
  const { setCurrentUser, currentUser } = useContext(Context);

  return (
    <div>
      <Navbar />
      <Main />
      <InsModal />
    </div>
  );
}
