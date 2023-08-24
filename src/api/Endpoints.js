import useSWR from "swr";
const YoutubeKey = process.env.NEXT_PUBLIC_YOUTUBE;
const WeatherKey = process.env.NEXT_PUBLIC_OPEN_WEATHER;
const BhagwadGitaKey = "2538a292famsh640adda00593d8cp17430ejsn464f9c2d4f7a";

const useFetchSWR = (link, options) => {
  const fetcher = (link, options) => fetch(link, options).then((res) => res.json());
  const { data, error, isLoading, isValidating } = useSWR([link, options], fetcher);
  const requestedOn = data || isValidating ? new Date() : null;
  const requestTime = requestedOn?.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return { data, error, isLoading, requestTime };
};

export const useGoldPrices = async (test) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "gold-price-live.p.rapidapi.com",
    },
  };

  const link = `https://gold-price-live.p.rapidapi.com/get_metal_prices`;

  const raw = await fetch(link, options);
  const metalData = await raw.json();

  return { metalData, isLoading: !metalData };
};

export const useTime = async () => {
  const options = {
    method: "GET",
  };

  const link = "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata";
  const raw = await fetch(link, options);
  const timeData = await raw.json();
  return { timeData, isLoading: !timeData };
};
export const useWikiData = async (ref) => {
  const { month, day } = ref;
  const options = {
    method: "GET",
  };

  const link = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/selected/${month}/${day}`;
  const raw = await fetch(link, options);
  const wikiData = await raw.json();
  return { wikiData, isLoading: !wikiData };
};
export const useStockPrice = async () => {
  const symbol = "TCS.BSE";
  const options = {
    method: "GET",
  };

  const link = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTANGE}`;
  const raw = await fetch(link, options);
  const stockData = await raw.json();

  return { stockData, isLoading: !stockData };
};

// Realtime APIS
export const useWeather = () => {
  const lat = 28.6479;
  const long = 77.2867;
  const options = {
    method: "GET",
  };
  const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WeatherKey}`;
  const { error, isLoading, data, requestTime } = useFetchSWR(link, options);
  return { data, error, requestTime, isLoading };
};

export const useYoutube = () => {
  const part = "snippet%2CcontentDetails%2Cstatistics";
  const channelID = "UC0p1uOqudO-Yf1cTc8z_ssQ";
  const options = {
    method: "GET",
  };

  const link = `https://youtube.googleapis.com/youtube/v3/channels?part=${part}&id=${channelID}&key=${YoutubeKey}`;
  const { error, isLoading, data, requestTime } = useFetchSWR(link, options);
  return { data, error, requestTime, isLoading };
};

export const useBhagwadGitaQuote = async (ref) => {
  let { chapter, verse } = ref;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": BhagwadGitaKey,
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const link = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;

  const { error, isLoading, data, requestTime } = useFetchSWR(link, options);

  return { data, error, requestTime, isLoading };
};

//For testing/dev
export const useGoldPricesTest = async () => {
  const metalData = await {
    gold: "12345.3",
    silver: "152.235",
  };
  return { metalData };
};
