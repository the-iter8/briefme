import React, { useState, useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { UserContext } from "../../utils/Contexts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { insModalStyle } from "../../utils/LocalData";
import { postUser, getUser } from "../../utils/Firebase";

import Text from "../../components/Text";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./InsModal.module.css";
import Button from "../../components/Button";

export default function InsModal({ toggle }) {
  const { openInsModal, setOpenInsModal } = toggle;
  const { currentUser } = useContext(UserContext);

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
          <img src='/army.jpg' alt='' />
        </SwiperSlide>

        <SwiperSlide className={styles.mySwiper}>
          <img src='/army.jpg' alt='' />
        </SwiperSlide>

        <SwiperSlide className={styles.mySwiper}>
          <img src='/army.jpg' alt='' />
        </SwiperSlide>

        <SwiperSlide className={styles.mySwiper}>
          <img src='/army.jpg' alt='' />
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
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={insModalStyle}>
        <div className={styles.insModalInner}>
          <Carousel></Carousel>

          <Text size='md' weight='bold' align='center'>
            Welcome to your Dashboard!
          </Text>
          <Text size='xs' align='center'>
            We're glad to have you onboard. Here are some quick tips to get you up and running.
          </Text>

          <Button
            fontSize='xs'
            fontWeight='semi-bold'
            onClick={() => {
              postUser(currentUser);
              handleCloseInsModal();
              //   Sucess Pop nottifcioaton
            }}
          >
            Lets Roll !
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
