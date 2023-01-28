import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/Contexts';

import styles from './Navbar.module.css';
import { logOut } from '../../utils/Firebase';

import Text from '../../components/Text';
import NavbarQuote from '../../modules/TheBhagwadGita/NavbarQuote';

import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar({ data }) {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const UserProfile = () => {
    return (
      <div className={styles.profileSection}>
        <div className={styles.profile}>
          <div>
            <Text size='xxxs' align='right' weight='semi-bold'>
              {currentUser?.displayName}
            </Text>
            <Text size='tiny' color='grey'>
              {currentUser?.email}
            </Text>
          </div>
          <Avatar src={currentUser?.photoURL} className={styles.avatar} />
        </div>
        <div className={styles.profileIcons}>
          <SettingsIcon size='small' />

          <LogoutIcon
            size='small'
            onClick={() => {
              logOut();
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.navbar}>
      <NavbarQuote data={data} />
      <UserProfile />
    </div>
  );
}
