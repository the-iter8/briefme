const XapiKey = process.env.RAPID_API_KEY;
const StockapiKey = process.env.ALPHA_VANTANGE;
export const useGoldPrices = async (test) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": XapiKey,
      "X-RapidAPI-Host": "gold-price-live.p.rapidapi.com",
    },
  };

  const link = `https://gold-price-live.p.rapidapi.com/get_metal_prices`;

  const raw = await fetch(link, options);
  const metalData = await raw.json();

  return { metalData, isLoading: !metalData };
};
export const useBhagwadGitaQuote = async (ref) => {
  let { chapter, verse } = ref;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": XapiKey,
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const link = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
  const raw = await fetch(link, options);
  const bhagwadGitaData = await raw.json();

  return { bhagwadGitaData, isLoading: !bhagwadGitaData };
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

  const link = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${StockapiKey}`;
  const raw = await fetch(link, options);
  const stockData = await raw.json();

  return { stockData, isLoading: !stockData };
};

//For testing

export const useGoldPricesTest = async () => {
  const metalData = await {
    gold: "12345.3",
    silver: "152.235",
  };
  return { metalData };
};
