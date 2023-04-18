import React from "react";

import styles from "./Navbar.module.css";
import { logOut } from "../../utils/Firebase";

import Text from "../../components/Text";
import NavbarQuote from "../../modules/TheBhagwadGita/NavbarQuote";
import { MUIIconStyle } from "../../utils/LocalData";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar(props) {
  const { data, prefModal, userData } = props;
  const { setOpenEditPref } = prefModal;

  // remove this below
  const MUIIconInlineStyle = {
    padding: 0.8,
    opacity: 0.75,
    paddingTop: 0.4,
    paddingBottom: 0.4,
    borderRadius: "8px",

    boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.75)",
  };
  const UserProfile = () => {
    return (
      <div className={styles.profileSection}>
        <div className={styles.profile}>
          <div>
            <Text size='xs' align='right' weight='semi-bold'>
              {userData?.fullName || "Waiting for you... "}
            </Text>
            <Text size='xxs' color='grey'>
              {userData?.emailId || "yourcuteemail@awwmail.com"}
            </Text>
          </div>
          <Avatar src={userData?.photo} className={styles.avatar} alt={userData?.fullName || "i8"} />
        </div>
        <div className={styles.profileIcons}>
          <IconButton
            sx={MUIIconStyle}
            onClick={() => {
              logOut();
            }}
          >
            <PowerSettingsNewIcon size='small' />
          </IconButton>
          <IconButton
            sx={MUIIconInlineStyle}
            onClick={() => {
              setOpenEditPref(true);
            }}
          >
            <Text size='xxs'>Edit Widgets</Text>
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.navbar}>
      <NavbarQuote data={data} />
      <UserProfile />
    </div>
  );
}
