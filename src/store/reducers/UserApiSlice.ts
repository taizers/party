import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendRequest: builder.mutation({
      query: (id) => ({
        url: `/person/participation/party/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['UserParty'],
    }),
    setPartyGrade: builder.mutation({
      query: ({ id, rate }) => ({
        url: `/person/rate/party/${id}?rate=${rate}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['UserParty'],
    }),
    leaveFromParty: builder.mutation({
      query: (id) => ({
        url: `/person/participate/request/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserParty'],
    }),
    getUsersPartiesList: builder.query({
      query: ({ page, limit }) => ({
        url: `/person/participation/requests?page=${page}&size=${limit}`,
      }),
      providesTags: ['UserParty'],
    }),
    getUsersParty: builder.query({
      query: (id) => ({
        url: `/person/participation/request/${id}`,
      }),
      providesTags: ['UserParty'],
    }),
  }),
});
