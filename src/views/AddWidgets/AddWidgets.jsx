import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './AddWidgets.module.css';
import { DataContext, UserContext } from '../../utils/Contexts';
import { postPref } from '../../utils/Firebase';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//Dynamic Imports
const MetalPrices = dynamic(
  () => import('../../modules/MetalPrices/MetalPrices'),
  { loading: () => 'Loading...' }
);
const StockPrices = dynamic(
  () => import('../../modules/StockPrices/StockPrices'),
  { loading: () => 'Loading...' }
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddWidgets() {
  const { userPref } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const [localUserPref, setLocalUserPref] = useState(userPref);

  //Setup a way to make this array common for both the Display Widget and Select Widget. We will use a particular function that will filter only the components that are available from the pref
  // Pref will contain all the objects of different
  // Set Avail = False If API not working.

  const availableCards = [
    {
      id: 0,
      avail: true,
      keyID: 'MP',
      comp: (
        <MetalPrices
          isEdit
          localUserPref={localUserPref}
          setLocalUserPref={setLocalUserPref}
        />
      ),
    },
    {
      id: 1,
      avail: false,
      keyID: 'SP',
      comp: (
        <StockPrices
          isEdit
          localUserPref={localUserPref}
          setLocalUserPref={setLocalUserPref}
        />
      ),
    },
  ].filter((item) => {
    return item.avail;
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSavePref = () => {
    // Show a popup that the preferance has been updated.
    console.log(localUserPref);
    postPref(currentUser, localUserPref);
  };
  const Nav = () => {
    return (
      <AppBar sx={{ position: 'relative' }}>
        <div className={styles.navbar}>
          <div className={styles.navbarChild}>
            <IconButton edge='start' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Text size='xxs' color='light'>
              Edit or add your widget preferance.
            </Text>
          </div>
          <Button color='light' primary onClick={handleSavePref}>
            Save
          </Button>
        </div>
      </AppBar>
    );
  };

  return (
    <>
      <Button
        fontSize='xxxs'
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Widgets
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Nav />
        {/* Add a keyID. */}
        <div className={styles.pref}>
          {availableCards?.map((item, index) => {
            return item.comp;
          })}
        </div>
      </Dialog>
    </>
  );
}
