import styles from './LargeCard.module.css';

import React, { useContext } from 'react';
import { DataContext } from '../../../utils/Contexts';
import Text from '../../../components/Text/Text';
import FetchText from '../../FetchText/FetchText';
import { MUIIconStyle } from '../../../utils/LocalData';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

export default function LargeCard(props) {
  const { title, source, isEdit, SVG, children, keyName } = props;
  const { userPref, setUserPref } = useContext(DataContext);
  // console.log(isEdit, keyName);

  //make 3 functions such that 1 will set the pref locally, one will post the pref.

  const Info = () => {
    //put an onClick Fucntion
    return <div className={styles.info}>i</div>;
  };

  const handleAddLocalPref = () => {
    let flag = 0;
    let newArr = [];
    userPref.forEach((item) => {
      if (item.key === keyName) flag++;
    });
    if (flag === 0) {
      const newArr = [
        ...userPref,
        {
          key: keyName,
        },
      ];
      setUserPref(newArr);
    }
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
            console.log('click');
          }}
        >
          <RemoveCircleOutlinedIcon />
        </IconButton>
      </div>
    );
  };
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
