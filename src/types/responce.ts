import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface useGetQueryResponce<T> {
  data: T;
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
}

interface IPhoto {
  photoPath: string;
}

export interface IShortItem {
  id: number;
  name: string;
}

export interface IComment {
  id: number;
  text: string;
  grade: number;
  user: IShortItem;
}

interface IPlaceDTOResponse extends IFishPlaceListItem {
  description: string;
  owner: boolean | null;
  fish: IShortItem[];
  comments: IComment[];
}

interface ITimeToCatchFish {
  afternoon: number;
  morning: number;
  evening: number;
}

interface IWeatherPlaceDTOResponse {
  tempMax: string;
  tempMin: string;
  temp: string;
  sunRise: string;
  sunSet: string;
}

export interface IPlace {
  placeDTOResponse: IPlaceDTOResponse;
  timeToCatchFish: ITimeToCatchFish;
  weatherPlaceDTOResponse: IWeatherPlaceDTOResponse;
}

export interface IFishPlaceListItem {
  id: number;
  name: string;
  coordinates: string;
  requirePayment: boolean;
  typePlace: IShortItem;
  photos: IPhoto[];
}

export interface INews {
  id: number;
  title: string;
  annotation: string;
  text: string;
  photos: IPhoto[];
}
export interface INewsItem {
  id: number;
  title: string;
  annotation: string;
  isAlarm: boolean;
  photos: IPhoto[];
}

export interface IAdminItem {
  id: number;
  title: string;
  user: IShortItem;
  status: string;
}

export interface IAdminPalce extends IAdminItem {
  typePlace: string;
}
export interface IAdminComment {
  id: number;
  title: string;
  user: IShortItem;
  grade: number;
}

export interface IResponcePaginatedData<T> {
  itemCounts: number;
  items: T[];
}

export interface fileResponse {
  fileName: string,
  fileUrl: string,
}
