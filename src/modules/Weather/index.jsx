import React from "react";
import SmallCard from "../../components/Cards/Small";

import styles from "./Weather.module.css";
import Text from "../../components/Text";
import Rainy from "../../icons/Rainy";
import Sunset from "../../icons/Sunset";
import Sunrise from "../../icons/Sunrise";
import { useWeather } from "../../api/Endpoints";
import { convertUnixTo24Hour, convertToC } from "../../utils";

export default function Weather(props) {
  const { isEdit, localUserPref, setLocalUserPref } = props;
  const { data, error, isLoading } = useWeather();

  const SectionOne = () => {
    return (
      <div className={styles.root}>
        <div className={styles.leftDiv}>
          <Text size='sm' weight='bold'>
            {data?.weather[0].main} | {convertToC(data?.main.temp)}
          </Text>
          <div className='flex-column gap-1'>
            <Text size='xs' weight='semi-bold'>
              Humidity : {data?.main.humidity}
            </Text>
            <Text size='xs' weight='semi-bold'>
              Wind : {data?.wind.speed} km/s
            </Text>
            <Text size='xs' weight='semi-bold'>
              Temp Max : {convertToC(data?.main.temp_max)}
            </Text>
            <Text size='xs' weight='semi-bold'>
              Temp Min : {convertToC(data?.main.temp_min)}
            </Text>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.weatherIcon}>
            <Rainy />
          </div>

          <div className={styles.sunDiv}>
            <div>
              <Sunset></Sunset>
              <Text size='xxs'>{convertUnixTo24Hour(data?.sys.sunset)}</Text>
            </div>
            <div>
              <Sunrise></Sunrise>
              <Text size='xxs'>{convertUnixTo24Hour(data?.sys.sunrise)}</Text>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SmallCard
      keyID='WT'
      isEdit={isEdit}
      isLoading={isLoading || error}
      title='Weather Report'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <SectionOne />
    </SmallCard>
  );
}
