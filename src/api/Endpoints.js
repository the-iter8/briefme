export const useBhagwadGitaQuote = async (ref) => {
  let { chapter, verse } = ref;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.BHAGWAD_KEY,
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    },
  };

  const link = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
  const raw = await fetch(link, options);
  const bhagwadGitaData = await raw.json();

  return { bhagwadGitaData, isLoading: !bhagwadGitaData };
};
export const useTime = async () => {
  const options = {
    method: 'GET',
  };

  const link =
    'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata';
  const raw = await fetch(link, options);
  const timeData = await raw.json();
  return { timeData, isLoading: !timeData };
};
