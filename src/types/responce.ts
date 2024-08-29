import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface useGetQueryResponce<T> {
  data: T;
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
}

export interface IShortItem {
  id: number;
  name: string;
}

export interface IGuest {
  id: number;
  username: string;
  age: number;
}
export interface IGuestRequest {
  id: number;
  username: string;
  age: number;
  rate: number;
}
export interface IParty {
  id: number;
  name: string;
  type: string;
  city: string;
  statusOfParticipationRequest: string;
  organizerUsername: string;
  ageRestriction: number;
  guests: IGuest[];
  countOfPlaces: number;
  description: string;
  coordinates: string;
  minimalRating: number;
  ticketCost: number;
  dateOfEvent: string;
}

export interface IPartyListItem {
  id: number;
  name: string;
  type: string;
  organizerUsername: string;
  ageRestriction: number;
  ticketCost: number;
  dateOfEvent: string;
}

interface ITableItemParty {
  id: number;
  name: string;
  type: string;
  ageRestriction: number;
  countOfPlaces: number;
  ticketCost: number;
  dateOfEvent: string;
  status: string;
}
export interface IOrganizatorsParty extends ITableItemParty {
  id: number;
}
export interface IAdminsParty extends ITableItemParty {
  organizerUsername: string;
}
export interface IUsersParty extends ITableItemParty {
  organizerUsername: string;
}

export interface IResponcePaginatedData<T> {
  totalElements: number;
  content: T[];
}

export interface fileResponse {
  fileName: string;
  fileUrl: string;
}
