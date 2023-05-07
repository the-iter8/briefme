import React from "react";
import Text from "../../Text";
import styles from "./SmallCard.module.css";
import IconButton from "@mui/material/IconButton";
import { MUIIconStyle } from "../../../utils/LocalData";
import Button from "../../../components/Button";
import Skeleton from "react-loading-skeleton";
import { handleAddLocalPref, handleRemovePref } from "../../../utils";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
export default function SmallCard(props) {
  const { keyID, isEdit, isLoading, children, localUserPref, setLocalUserPref, title } = props;

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
          <Skeleton count={1.5} />
          <Skeleton count={1.5} />
        </div>
      </div>
    );
  return (
    <div className={styles.root}>
      <Grabber />

      {isEdit ? (
        <div className={styles.editStub}>
          <Text size='xs'>{title}</Text>
        </div>
      ) : (
        <div className={styles.mainContent}>{children}</div>
      )}

      {isEdit && (
        <div className={styles.footer}>
          {" "}
          <FooterEditIcons />
        </div>
      )}
    </div>
  );
}
