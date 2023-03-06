import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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

//Dynamic Imports change the loading shit.

const MetalPrices = dynamic(
  () => import('../../modules/MetalPrices/MetalPrices'),
  { loading: () => 'Loading...' }
);
const StockPrices = dynamic(
  () => import('../../modules/StockPrices/StockPrices'),
  { loading: () => 'Loading...' }
);
const OnThisDay = dynamic(() => import('../../modules/OnThisDay/OnThisDay'), {
  loading: () => 'Loading...',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddWidgets({ prefModal }) {
  const { userPref } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);
  const { openEditPref, setOpenEditPref } = prefModal;
  const [localUserPref, setLocalUserPref] = useState({});
  const router = useRouter();

  useEffect(() => {
    setLocalUserPref(userPref);
  }, [userPref]);

  const availableCards = [
    {
      id: 0,
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
      keyID: 'OTD',
      comp: (
        <OnThisDay
          isEdit
          localUserPref={localUserPref}
          setLocalUserPref={setLocalUserPref}
        />
      ),
    },
  ];

  const handleClose = () => {
    setOpenEditPref((open) => !open);
    router.reload(window.location.pathname);
  };

  const handleSavePref = () => {
    // Show a popup that the preferance has been updated.
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
    <Dialog
      fullScreen
      open={openEditPref}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Nav />
      <div className={styles.pref}>
        {availableCards?.map((item, index) => {
          return item.comp;
        })}
      </div>
    </Dialog>
  );
}
