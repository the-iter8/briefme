export const useBhagwadGitaQuote = async (ref) => {
  let { chapter, verse } = ref;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2538a292famsh640adda00593d8cp17430ejsn464f9c2d4f7a',
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

  const link = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata';
  const raw = await fetch(link, options);
  const timeData = await raw.json();
  return { timeData, isLoading: !timeData };
};

// export const useItineraryData = (activityId: string) => {
//   const { data, error } = useAuthSWR<ItineraryDataType[]>(`/itinerary/${activityId}`);
//   return { data, isLoading: !error && !data };
// };

// export const useHotelDetails = () => {
//   const { data, error } = useAuthSWR<HotelDetailsDataType>(`/hotel/${hotelId}`);
//   return { data, isLoading: !error && !data };
// };

// export const useHotelHomeData = () => {
//   const { data, error } = useAuthSWR<CategoryDataType[]>(`/activitycategory/hotel/${hotelId}/categories`);
//   return { data, isLoading: !error && !data };
// };

// export const useCategoriesList = () => {
//   const { data, error } = useAuthSWR<any>(`/activitycategory/hotel/${hotelId}/categories`);
//   return { data, isLoading: !error && !data };
// };
// export const useActivityBookings = () => {
//   const { data, error, mutate } = useAuthSWR<ActivityBookingType[]>(`/activitybooking/booking-customer/${hotelId}`);
//   return { data, isLoading: !error && !data, mutate };
// };

// export const useCategoryData = (categoryId: string) => {
//   const { data, error } = useAuthSWR<any>(`/activitycategory/hotel/${hotelId}/category/${categoryId}`);
//   return { data, isLoading: !error && !data };
// };

// export const useActivityData = (categoryId: string, activityId: string) => {
//   const { data, error } = useAuthSWR<ActivityDetailType>(`/activity/${activityId}`);
//   return { data, isLoading: !error && !data };
// };

// export const usePersonalizedData = () => {
//   const { data, error } = useAuthSWR<any>(`/hotel/selected-activities/for-you/${hotelId}`);
//   return { data, isLoading: !error && !data };
// };

// export const useCustomerInfo = () => {
//   const { data, error } = useAuthSWR<any>(`/activitybooking/booking-customer/${hotelId}`);
//   return { data, isLoading: !error && !data };
// };
// export const usePostActivityBooking = () => useAuthAPI<ActivityBookingPostData>("/activitybooking");

// export const usePutActivityBooking = (activityBookingId: string) =>
//   useAuthAPI<ActivityBookingPostData>(`/activitybooking/${activityBookingId}`);
