import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/Contexts';

import styles from './Navbar.module.css';
import { logOut } from '../../utils/Firebase';

import Text from '../../components/Text/Text';
import NavbarQuote from '../../modules/TheBhagwadGita/NavbarQuote';
import { MUIIconStyle } from '../../utils/LocalData';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar(props) {
  const { data, prefModal } = props;
  const { openEditPref, setOpenEditPref } = prefModal;
  const { currentUser } = useContext(UserContext);

  // remove this below
  const MUIIconInlineStyle = {
    padding: 0.8,
    opacity: 0.75,
    paddingTop: 0.4,
    paddingBottom: 0.4,
    borderRadius: '8px',

    boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.75)',
  };
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
          <IconButton
            sx={MUIIconStyle}
            onClick={() => {
              logOut();
            }}
          >
            <PowerSettingsNewIcon size='small' />
          </IconButton>
          <IconButton
            sx={MUIIconInlineStyle}
            onClick={() => {
              setOpenEditPref(true);
            }}
          >
            <Text size='tiny'>Edit Widgets</Text>
          </IconButton>
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
