import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import React, { useContext, useState, useEffect } from "react";
import Button from "../../components/Button";
import Slide from "@mui/material/Slide";
import Text from "../../components/Text";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import styles from "./AddWidgets.module.css";
import { postPref } from "../../utils/Firebase";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext, UserContext } from "../../utils/Contexts";

//Dynamic Imports change the loading shit.

import MetalPrices from "../../modules/MetalPrices";
import StockPrices from "../../modules/StockPrices";
import OnThisDay from "../../modules/OnThisDay";
import Youtube from "../../modules/Youtube";
import Weather from "../../modules/Weather";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddWidgets({ prefModal }) {
  const { userPref } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);
  const { openEditPref, setOpenEditPref } = prefModal;
  const [localUserPref, setLocalUserPref] = useState({});
  const router = useRouter();

  useEffect(() => {
    setLocalUserPref(userPref);
  }, [userPref]);

  // TODO check if changing Id's Will cause trouble.

  const availableCards = [
    {
      id: 0,
      keyID: "MP",
      comp: <MetalPrices isEdit localUserPref={localUserPref} setLocalUserPref={setLocalUserPref} />,
    },
    {
      id: 1,
      keyID: "OTD",
      comp: <OnThisDay isEdit localUserPref={localUserPref} setLocalUserPref={setLocalUserPref} />,
    },
    {
      id: 2,
      keyID: "SP",
      comp: <StockPrices isEdit localUserPref={localUserPref} setLocalUserPref={setLocalUserPref} />,
    },
    {
      id: 3,
      keyID: "YT",
      comp: <Youtube isEdit localUserPref={localUserPref} setLocalUserPref={setLocalUserPref} />,
    },
    {
      id: 4,
      keyID: "WT",
      comp: <Weather isEdit localUserPref={localUserPref} setLocalUserPref={setLocalUserPref} />,
    },
  ];

  const handleClose = () => {
    setOpenEditPref((open) => !open);
    router.reload(window.location.pathname);
  };

  const handleSavePref = async () => {
    await postPref(currentUser, localUserPref);
    toast.success("Your preferance has been saved.");
  };

  const Nav = () => {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarChild}>
          <Button onClick={handleClose} icon={<CloseIcon />} type="secondary"/>

          <Text size='md' weight='semi-bold'>
            Edit or add your widget preferance.
          </Text>
        </div>
        <Button fontSize='xs' color='dark' primary onClick={handleSavePref}>
          Save
        </Button>
      </div>
    );
  };

  return (
    <Dialog fullScreen open={openEditPref} onClose={handleClose} TransitionComponent={Transition}>
      <Nav />
      <div className={styles.pref}>
        {availableCards?.map((item, index) => {
          return item.comp;
        })}
      </div>
    </Dialog>
  );
}
