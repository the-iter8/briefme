import React from "react";
import Text from "../../Text";
import styles from "./SmallCard.module.css";
import { MUIIconStyle } from "../../../utils/LocalData";
import IconButton from "@mui/material/IconButton";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
export default function SmallCard(props) {
  const { keyID, isEdit, children, localUserPref, setLocalUserPref, title } = props;

  const Grabber = () => {
    //put an onClick Fucntion
    return (
      <div className={styles.grabber}>
        <ControlCameraIcon />
      </div>
    );
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
