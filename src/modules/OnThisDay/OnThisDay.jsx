import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';
import styles from './OnThisDay.module.css';
import Text from '../../components/Text/Text';
import { OnthisdayStub } from '../../utils/LocalData';


import Link from 'next/link';

export default function OnThisDay(props) {
  const { data, isEdit, localUserPref, setLocalUserPref } = props;

  const dataThatWeNeed = data?.selected?.slice(0, 5);

  const Section = ({ title, desc, img, link }) => {
    return (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className={styles.section}>
          <div className={styles.imgDiv}>
            <img
              src={img || '/imgnotfound.png'}
              className={styles.img}
              width='100%'
              height='100%'
            />
          </div>
          <div className={styles.textDiv}>
            <Text sizeCustom='0.6rem' weight='bold' align='left'>
              {title}
            </Text>
            <Text sizeCustom='0.55rem' align='left'>
              {desc}
            </Text>
          </div>
        </div>
      </a>
    );
  };

  return (
    <LargeCard
      title={`On This Day - add date`}
      source='Wikipedia'
      isEdit={isEdit}
      keyID='OTD'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <div className={styles.scrollingContainer}>
        {(dataThatWeNeed || OnthisdayStub)?.map((item) => {
          const { text, pages } = item;
          const { titles, thumbnail, content_urls } = pages[0];
          const shrunkText = text.split(' ').slice(0, 14).join(' ');
          const shrunkTitle = titles?.normalized
            ?.split(' ')
            .slice(0, 4)
            .join(' ');

          return (
            <Section
              img={thumbnail?.source}
              title={shrunkTitle}
              desc={shrunkText}
              link={content_urls?.desktop?.page}
            />
          );
        })}
      </div>
    </LargeCard>
  );
}
