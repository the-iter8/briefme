import styles from './LargeCard.module.css';

import React, { useContext, useState } from 'react';
import { DataContext } from '../../../utils/Contexts';
import Text from '../../../components/Text/Text';
import FetchText from '../../FetchText/FetchText';
import { MUIIconStyle } from '../../../utils/LocalData';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

export default function LargeCard(props) {
  const {
    keyID,
    SVG,
    title,
    source,
    isEdit,
    children,
    localUserPref,
    setLocalUserPref,
  } = props;

  const Info = () => {
    //put an onClick Fucntion
    return <div className={styles.info}>i</div>;
  };

  const handleAddLocalPref = () => {
    let flag = 0;
    localUserPref?.forEach((item) => {
      if (item.keyID === keyID) flag++;
    });
    if (flag === 0 && localUserPref) {
      const newArr = [
        ...localUserPref,
        {
          keyID: keyID,
        },
      ];
      setLocalUserPref(newArr);
    }
  };

  const handleRemovePref = () => {
    let newArr = [];
    let flag = 0;
    newArr = localUserPref?.filter((item) => {
      if (item.keyID === keyID) flag = 1;
      return item.keyID !== keyID;
    });
    if (flag) setLocalUserPref(newArr);
  };

  const FooterEditIcons = () => {
    return (
      <div className={styles.footerIcons}>
        <IconButton
          sx={MUIIconStyle}
          onClick={() => {
            handleAddLocalPref();
          }}
        >
          <AddCircleOutlinedIcon />
        </IconButton>
        <IconButton
          sx={MUIIconStyle}
          onClick={() => {
            handleRemovePref();
          }}
        >
          <RemoveCircleOutlinedIcon />
        </IconButton>
      </div>
    );
  };
  console.log('Large card is rendered with - ', title);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text align='center' size='xxxs'>
          {title}
        </Text>
        <Info />
      </div>

      <div className={styles.mainContent}>{children}</div>
      {!isEdit && (
        <div className={styles.SVG}>
          <SVG />
        </div>
      )}
      <div className={styles.footer}>
        {isEdit && <FooterEditIcons />}

        <FetchText source={source} small />
      </div>
    </div>
  );
}
