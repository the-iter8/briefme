import React, { useState, useContext } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { UserContext } from '../../utils/Contexts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import { postUser, getUser } from '../../utils/Firebase';

import Text from '../../components/Text/Text';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './InsModal.module.css';
import Button from '../../components/Button/Button';

export default function InsModal() {
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const [open, setOpen] = useState(true);

  const handleOpenInsModal = () => setOpen(false);
  const handleCloseInsModal = () => setOpen(true);
  if (currentUser)
    getUser(currentUser).then((resp) => {
      setOpen(Boolean(resp));
    });

  const insModalStyle = {
    borderRadius: 3,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  };

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
      open={!open}
      onClose={handleCloseInsModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={insModalStyle}>
        <div className={styles.insModalInner}>
          <Carousel></Carousel>

          <Text size='xxs' weight='bold' align='center'>
            Welcome to your Dashboard!
          </Text>
          <Text size='xxxs' align='center'>
            We're glad to have you onboard. Here are some quick tips to get you
            up and running.
          </Text>

          <Button
            fontSize='xxxs'
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
