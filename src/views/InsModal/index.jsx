import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { UserContext } from "../../utils/Contexts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { insModalStyle } from "../../utils/LocalData";
import { postUser } from "../../utils/Firebase";
import { useRouter } from "next/router";

import Text from "../../components/Text";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./InsModal.module.css";
import Button from "../../components/Button";

export default function InsModal(props) {
  const { openInsModal, setOpenInsModal, fetchedUserData } = props.toggleData;
  const { currentUser } = useContext(UserContext);
  const router = useRouter();

  const handleCloseInsModal = () => setOpenInsModal(true);

  function Carousel() {
    return (
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySwiper}>
          <div className={styles.iFrameDiv}>
            <iframe
              src='https://app.supademo.com/embed/H_Aa6uC6zYJj9l_DFGZ2x'
              frameBorder='0'
              className={styles.iFrame}
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.mySwiper}>
          <div className={styles.onBoardingPoints}>
            <h2>Some key points to note while using breif me - </h2>
            <Text size='sm' weight='medium'>
              Refrain from refreshing the page just for fun. Although things like Gold Price, On this Day, etc. are
              fetched once a day, some modules fetch realtime. Refreshing the page will cause unnecessary API calls.
            </Text>

            <Text size='sm' weight='medium'>
              Avoid editing widgets for fun. Editing the module again cause unnecessary API calls. Each API has a "Free
              Tier Cap" and I'm not planning to invest capital in this project.
            </Text>

            <Text size='sm' weight='medium'>
              Contact randomdweller.me@gmail.com if you'd like to give some suggestion or feedback.
            </Text>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  }

  return (
    <Modal
      open={!openInsModal}
      onClose={() => {
        handleCloseInsModal();
      }}
    >
      <Box sx={insModalStyle}>
        <div className={styles.insModalInner}>
          <Carousel></Carousel>

          <Text size='md' weight='bold' align='center'>
            Welcome to your Dashboard!
          </Text>
          <Text size='sm' align='center'>
            We're glad to have you onboard. Here are some quick tips to get you up and running.
          </Text>

          <Button
            fontSize='xs'
            fontWeight='semi-bold'
            onClick={async () => {
              //Basically check the second if inside the useEffect. Its done to check if the onboarding has already done or not and reloads to set the profile pic and stuff.
              if (!fetchedUserData) {
                await postUser(currentUser);
                router.reload(window.location.pathname);
              }
              handleCloseInsModal();
              //   Sucess Pop nottifcioaton
            }}
          >
            {fetchedUserData ? "Ok Got it" : "Lets Roll !"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
