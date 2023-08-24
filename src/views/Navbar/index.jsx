import React from "react";

import styles from "./Navbar.module.css";
import { logOut } from "../../utils/Firebase";

import Text from "../../components/Text";
import Avatar from "@mui/material/Avatar";
import Button from "../../components/Button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NavbarQuote from "../../modules/TheBhagwadGita/NavbarQuote";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function Navbar(props) {
  const { prefModal, userData, setOpenInsModal } = props;
  const { setOpenEditPref } = prefModal;

  // remove this below

  const UserProfile = () => {
    return (
      <div className={styles.profileSection}>
        <div className={styles.profile}>
          <div className={styles.profileText}>
            <Text size='md' align='right' weight='heavy'>
              {userData?.fullName || "Waiting for you... "}
            </Text>
            <Text size='sm' color='grey'>
              {userData?.emailId || "yourcuteemail@awwmail.com"}
            </Text>
          </div>
          <Avatar src={userData?.photo} className={styles.avatar} alt={userData?.fullName || "User"} />
        </div>
        <div className={styles.profileIcons}>
          <Button
            onClick={() => {
              setOpenEditPref(true);
            }}
          >
            Edit Widgets
          </Button>
          <Button
            type='secondary'
            icon={<HelpOutlineIcon size='small' />}
            onClick={() => {
              setOpenInsModal(false);
            }}
          />
          <Button
            icon={<PowerSettingsNewIcon size='small' />}
            type='secondary'
            onClick={() => {
              logOut();
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.navbar}>
      <NavbarQuote />
      <UserProfile />
    </div>
  );
}
