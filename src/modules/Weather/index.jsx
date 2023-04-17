import React from "react";
import SmallCard from "../../components/Cards/Small";

import styles from "./Weather.module.css";
import Text from "../../components/Text";
import Rainy from "../../icons/Rainy";
import Sunset from "../../icons/Sunset";
import Sunrise from "../../icons/Sunrise";

import { useWeather } from "../../api/Endpoints";
export default function Weather(props) {
  const { isEdit, localUserPref, setLocalUserPref } = props;
  const isLoading = false;
  // const { data, error, isLoading } = useWeather();
  // console.log(data, error, isLoading);
  const data = {
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n",
      },
    ],
    main: {
      temp: 304.28,
      feels_like: 302.27,
      temp_min: 304.28,
      temp_max: 304.28,
      pressure: 1006,
      humidity: 18,
      sea_level: 1006,
      grnd_level: 983,
    },
    visibility: 10000,
    wind: {
      speed: 2.23,
      deg: 293,
      gust: 4.9,
    },
    clouds: {
      all: 18,
    },
    dt: 1681669876,
    sys: {
      type: 1,
      id: 9165,
      country: "IN",
      sunrise: 1681691022,
      sunset: 1681737419,
    },
    timezone: 19800,
    id: 1273435,
    name: "Darya Ganj",
    cod: 200,
  };

  function convertUnixTo24Hour(unixTimestamp) {
    var date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
    return formattedTime;
  }

  const convertToC = (val) => {
    return (val - 273.15).toFixed(0) + "° C";
  };

  const SectionOne = () => {
    return (
      <div className={styles.root}>
        <div className={styles.leftDiv}>
          <Text size='sm' weight='bold'>
            {data.weather[0].main} | {convertToC(data.main.temp)}
          </Text>{" "}
          <div className='flex-column gap-1'>
            <Text size='xxs'  >Humidity : {data.main.humidity}</Text>
            <Text size='xxs'>Wind : {data.wind.speed} km/s</Text>
            <Text size='xxs' weight='semi-bold'>
              Temp Max : {convertToC(data.main.temp_max)}
            </Text>
            <Text size='xxs' weight='semi-bold'>
              Temp Min : {convertToC(data.main.temp_min)}
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
              <Text size='xxs'>{convertUnixTo24Hour(data.sys.sunset)}</Text>
            </div>
            <div>
              <Sunrise></Sunrise>
              <Text size='xxs'>{convertUnixTo24Hour(data.sys.sunrise)}</Text>
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
      {isLoading ? <div>loading..</div> : <SectionOne />}
    </SmallCard>
  );
}
