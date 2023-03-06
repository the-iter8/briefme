import React from 'react';
import LargeCard from '../../components/Cards/Large/LargeCard';
import styles from './OnThisDay.module.css';
import Text from '../../components/Text/Text';
import OnThisDay from '../../icons/OnThisDay';
import Image from 'next/image';

export default function StockPrices(props) {
  const { data, isEdit, localUserPref, setLocalUserPref } = props;
  // const { title, desc, img } = data;

  const obj = {
    text: 'Christian feast day:\nCiarán of Saigir',
    pages: [
      {
        type: 'standard',
        title: 'Ciarán_of_Saigir',
        displaytitle:
          '<span class="mw-page-title-main">Ciarán of Saigir</span>',
        namespace: {
          id: 0,
          text: '',
        },
        wikibase_item: 'Q2280421',
        titles: {
          canonical: 'Ciarán_of_Saigir',
          normalized: 'Ciarán of Saigir',
          display: '<span class="mw-page-title-main">Ciarán of Saigir</span>',
        },
        pageid: 6535905,
        thumbnail: {
          source:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Window_depicting_St._Kieran%2C_Seir_Kieran_Church%2C_Bell_Hill.jpg/320px-Window_depicting_St._Kieran%2C_Seir_Kieran_Church%2C_Bell_Hill.jpg',
          width: 320,
          height: 240,
        },
        originalimage: {
          source:
            'https://upload.wikimedia.org/wikipedia/commons/1/1c/Window_depicting_St._Kieran%2C_Seir_Kieran_Church%2C_Bell_Hill.jpg',
          width: 2592,
          height: 1944,
        },
        lang: 'en',
        dir: 'ltr',
        revision: '1130510869',
        tid: 'a4f723a0-b5c8-11ed-ab1d-e76a716a1dc3',
        timestamp: '2022-12-30T14:33:23Z',
        description: 'First Irish-born saint',
        description_source: 'local',
        content_urls: {
          desktop: {
            page: 'https://en.wikipedia.org/wiki/Ciar%C3%A1n_of_Saigir',
            revisions:
              'https://en.wikipedia.org/wiki/Ciar%C3%A1n_of_Saigir?action=history',
            edit: 'https://en.wikipedia.org/wiki/Ciar%C3%A1n_of_Saigir?action=edit',
            talk: 'https://en.wikipedia.org/wiki/Talk:Ciar%C3%A1n_of_Saigir',
          },
          mobile: {
            page: 'https://en.m.wikipedia.org/wiki/Ciar%C3%A1n_of_Saigir',
            revisions:
              'https://en.m.wikipedia.org/wiki/Special:History/Ciar%C3%A1n_of_Saigir',
            edit: 'https://en.m.wikipedia.org/wiki/Ciar%C3%A1n_of_Saigir?action=edit',
            talk: 'https://en.m.wikipedia.org/wiki/Talk:Ciar%C3%A1n_of_Saigir',
          },
        },
        extract:
          'Ciarán of Saigir, also known as Ciarán mac Luaigne or Saint Kieran, was one of the Twelve Apostles of Ireland and is considered the first saint to have been born in Ireland, although the legend that he preceded Saint Patrick is questionable. Ciarán was bishop of Saighir (Seir-Kieran) and remains the patron saint of its successor, the diocese of Ossory.',
        extract_html:
          '<p><b>Ciarán of Saigir</b>, also known as <b>Ciarán mac Luaigne</b> or <b>Saint Kieran</b>, was one of the Twelve Apostles of Ireland and is considered the first saint to have been born in Ireland, although the legend that he preceded Saint Patrick is questionable. Ciarán was bishop of Saighir (Seir-Kieran) and remains the patron saint of its successor, the diocese of Ossory.</p>',
        normalizedtitle: 'Ciarán of Saigir',
      },
    ],
  };
  console.log('renders');

  const SectionOne = ({ title, desc, img }) => {
    return (
      <div className={styles.sectionOne}>
        <div className={styles.imgDiv}>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Window_depicting_St._Kieran%2C_Seir_Kieran_Church%2C_Bell_Hill.jpg/320px-Window_depicting_St._Kieran%2C_Seir_Kieran_Church%2C_Bell_Hill.jpg'
            alt='someimage'
            layout='fill'
            objectFit='cover'
            priority
          ></Image>
        </div>
        <div className={styles.textDiv}>
          <Text size='xs' align='left'>
            {title}
          </Text>
          <Text size='xxs' weight='bold' align='right'>
            {desc}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <LargeCard
      title={`On This Day - add date`}
      source='Wikipedia'
      isEdit={isEdit}
      keyID='OTD'
      SVG={OnThisDay}
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <SectionOne
        img='/army.jpg'
        title='Army Day Yay'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, est.'
      />
    </LargeCard>
  );
}
