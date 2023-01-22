import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';

import styles from './Navbar.module.css';
import { logOut } from '../../utils/Firebase';

import Avatar from '@mui/material/Avatar';
import NavbarQuote from '../../modules/NavbarQuote';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LogoutIcon from '@mui/icons-material/Logout';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function Navbar() {
  const { setCurrentUser, currentUser } = useContext(Context);
  function BaseMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Avatar
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          // set the image according to the fetched image from firestore.
          src='/army.jpg'
          className={styles.avatar}
        />
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={() => {
              logOut();
            }}
            className={styles.menuItem}
          >
            <ListItemText>Signout</ListItemText>
            <ListItemIcon>
              <LogoutIcon fontSize='small' />
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div className={`flex-between ${styles.navbar} `}>
      {/* we might want to remove this edit functionality.  */}
      <DriveFileRenameOutlineIcon fontSize='large' />
      <NavbarQuote />
      <BaseMenu />
    </div>
  );
}
