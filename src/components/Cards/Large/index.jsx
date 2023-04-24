import styles from "./LargeCard.module.css";

import React from "react";

import Text from "../../Text";
import FetchText from "../../FetchText";
import IconButton from "@mui/material/IconButton";
import Skeleton from "react-loading-skeleton";
import { MUIIconStyle } from "../../../utils/LocalData";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import { handleAddLocalPref, handleRemovePref } from "../../../utils";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
export default function LargeCard(props) {
  const { keyID, SVG, title, source, isEdit, isLoading, children, localUserPref, setLocalUserPref } = props;

  const Grabber = () => {
    //put an onClick Fucntion
    return (
      <div className={styles.grabber}>
        <ControlCameraIcon />
      </div>
    );
  };

  const FooterEditIcons = () => {
    return (
      <div className={styles.footerIcons}>
        <IconButton
          sx={MUIIconStyle}
          onClick={() => {
            handleAddLocalPref(keyID, title, localUserPref, setLocalUserPref);
          }}
        >
          <AddCircleOutlinedIcon />
        </IconButton>
        <IconButton
          sx={MUIIconStyle}
          onClick={() => {
            handleRemovePref(keyID, title, localUserPref, setLocalUserPref);
          }}
        >
          <RemoveCircleOutlinedIcon />
        </IconButton>
      </div>
    );
  };

  if (isLoading)
    return (
      <div className={styles.root}>
        <div className='skeleton'>
          <Skeleton count={3.5} />
          <Skeleton count={3.5} />
          <Skeleton count={1.5} />
        </div>
      </div>
    );
  else
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Text align='center' size='xs' weight='semi-bold'>
            {title}
          </Text>
          <Grabber />
        </div>

        <div className={styles.mainContent}>{children}</div>
        {!isEdit && SVG && (
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
