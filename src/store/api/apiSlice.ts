import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  localLogout,
  setUserToken,
  setUserData,
} from '../reducers/AuthSlice.ts';
import { apiUrl } from '../../constants.ts';
import { clearToken, setToken, getToken } from '../../utils/localStorage';
import { getUserFromToken } from '../../utils';

interface IRefreshResultData {
  access_token: string;
}

let refreshPromise: any = null;

const baseQuery = fetchBaseQuery({
  baseUrl: `${apiUrl}`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { auth } = getState() as { auth: { token: string } };
    const localToken = getToken();
    const token = auth.token || localToken;

    try {
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    } catch (error) {
      console.log(error);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('sending refresh token');

    if (refreshPromise) {
      console.log('Waiting for existing refresh promise');
      await refreshPromise;
      return baseQuery(args, api, extraOptions);
    }

    refreshPromise = baseQuery({
        url: '/auth/refresh',
        method: 'POST',
      },
      api,
      extraOptions
    );
    const refreshResult = await refreshPromise;

    console.log('refreshResult', refreshResult);

    if (refreshResult?.data) {
      const resultData = refreshResult.data as IRefreshResultData;
      const token = resultData.access_token;
      const user = getUserFromToken(token);

      if (user) {
        api.dispatch(setUserToken(token));
        api.dispatch(setUserData(user));
        setToken(token);
      } else {
        api.dispatch(setUserData({}));
      }

      refreshPromise = null;

      result = await baseQuery(args, api, extraOptions);
    } else {
      refreshPromise = null;
      api.dispatch(localLogout());
      clearToken();
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Party', 'UserParty', 'AdminParty', 'OrganizatorParty', 'ParticipationRequest'],
  endpoints: () => ({}),
});