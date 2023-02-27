import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import styles from './AddWidgets.module.css';
import { DataContext } from '../../utils/Contexts';

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
  const [open, setOpen] = React.useState(false);
  const { userPref, setUserPref } = useContext(DataContext);
  console.log(userPref, 'Add widget');

  //Setup a way to make this array common for both the Display Widget and Select Widget. We will use a particular function that will filter only the components that are available from the pref
  // Pref will contain all the objects of different
  // Set Avail = False If API not working.

  const availableCards = [
    {
      id: 0,
      avail: true,
      keyName: 'MP',
      comp: <MetalPrices isEdit />,
    },
    {
      id: 2,
      avail: false,
      comp: <StockPrices isEdit />,
      keyName: 'SP',
    },
  ].filter((item) => {
    return item.avail;
  });

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
          <Button color='light' onClick={handleClose} primary>
            Save
          </Button>
        </div>
      </AppBar>
    );
  };
  const handleClose = () => {
    setOpen(false);
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
        {/* Add a key. */}
        <div className={styles.pref}>
          {availableCards?.map((item, index) => {
            return item.comp;
          })}
        </div>
      </Dialog>
    </>
  );
}
