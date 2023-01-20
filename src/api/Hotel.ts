import {
  CategoryDataType,
  ItineraryDataType,
  HotelDetailsDataType,
  ActivityDetailType,
  ActivityBookingPostData,
  ActivityBookingType,
} from "@customTypes";

import useAuthAPI from "@hooks/useAuthAPI";
import useAuthSWR from "@hooks/useAuthSWR";

import { store } from "../redux/store";

const hotelId = store.getState().persistedReducer.hotel.hotelId;

export const useItineraryList = () => {
  const { data, error } = useAuthSWR<ItineraryDataType[]>(`/itinerary/itinerary-hotel/${hotelId}`);
  return { data, isLoading: !error && !data };
};
export const useItineraryData = (activityId: string) => {
  const { data, error } = useAuthSWR<ItineraryDataType[]>(`/itinerary/${activityId}`);
  return { data, isLoading: !error && !data };
};

export const useHotelDetails = () => {
  const { data, error } = useAuthSWR<HotelDetailsDataType>(`/hotel/${hotelId}`);
  return { data, isLoading: !error && !data };
};

export const useHotelHomeData = () => {
  const { data, error } = useAuthSWR<CategoryDataType[]>(`/activitycategory/hotel/${hotelId}/categories`);
  return { data, isLoading: !error && !data };
};

export const useCategoriesList = () => {
  const { data, error } = useAuthSWR<any>(`/activitycategory/hotel/${hotelId}/categories`);
  return { data, isLoading: !error && !data };
};
export const useActivityBookings = () => {
  const { data, error, mutate } = useAuthSWR<ActivityBookingType[]>(`/activitybooking/booking-customer/${hotelId}`);
  return { data, isLoading: !error && !data, mutate };
};

export const useCategoryData = (categoryId: string) => {
  const { data, error } = useAuthSWR<any>(`/activitycategory/hotel/${hotelId}/category/${categoryId}`);
  return { data, isLoading: !error && !data };
};

export const useActivityData = (categoryId: string, activityId: string) => {
  const { data, error } = useAuthSWR<ActivityDetailType>(`/activity/${activityId}`);
  return { data, isLoading: !error && !data };
};

export const usePersonalizedData = () => {
  const { data, error } = useAuthSWR<any>(`/hotel/selected-activities/for-you/${hotelId}`);
  return { data, isLoading: !error && !data };
};

export const useCustomerInfo = () => {
  const { data, error } = useAuthSWR<any>(`/activitybooking/booking-customer/${hotelId}`);
  return { data, isLoading: !error && !data };
};
export const usePostActivityBooking = () => useAuthAPI<ActivityBookingPostData>("/activitybooking");

export const usePutActivityBooking = (activityBookingId: string) =>
  useAuthAPI<ActivityBookingPostData>(`/activitybooking/${activityBookingId}`);
