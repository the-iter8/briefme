import styles from "./LargeCard.module.css";

import React from "react";

import Text from "../../Text";
import FetchText from "../../FetchText";

import Skeleton from "react-loading-skeleton";
import Button from "../../../components/Button";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import { handleAddLocalPref, handleRemovePref } from "../../../utils";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
export default function LargeCard(props) {
  const { keyID, SVG, title, source, isEdit, isLoading, children, localUserPref, setLocalUserPref, SWRTime } = props;

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
        <Button
          icon={<AddCircleOutlinedIcon />}
          type='secondary'
          bgColor='#B8FF9F'
          onClick={() => {
            handleAddLocalPref(keyID, title, localUserPref, setLocalUserPref);
          }}
        />

        <Button
          type='secondary'
          icon={<RemoveCircleOutlinedIcon />}
          onClick={() => {
            handleRemovePref(keyID, title, localUserPref, setLocalUserPref);
          }}
        />
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
          <Text align='center' size='xs' weight='heavy'>
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

          <FetchText SWRTime={SWRTime} source={source} small />
        </div>
      </div>
    );
}
