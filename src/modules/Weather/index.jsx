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
  console.log(data?.weather[0]?.main);

  const SectionOne = () => {
    return (
      <div className={styles.root}>
        <div className={styles.leftDiv}>
          <Text size='sm' weight='bold'>
            {data?.weather[0].main} | {convertToC(data?.main.temp)}
          </Text>{" "}
          <div className='flex-column gap-1'>
            <Text size='xxs'>Humidity : {data?.main.humidity}</Text>
            <Text size='xxs'>Wind : {data?.wind.speed} km/s</Text>
            <Text size='xxs' weight='semi-bold'>
              Temp Max : {convertToC(data?.main.temp_max)}
            </Text>
            <Text size='xxs' weight='semi-bold'>
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
      title='Weather Report'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      {isLoading || !data ? <div>loading..</div> : <SectionOne />}
    </SmallCard>
  );
}
