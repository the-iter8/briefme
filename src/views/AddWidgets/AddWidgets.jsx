import * as React from 'react';
import Button from '../../components/Button/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Text from '../../components/Text';
import styles from './AddWidgets.module.css';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddWidgets() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
        <List>
          <ListItem button>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary='Default notification ringtone'
              secondary='Tethys'
            />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}
