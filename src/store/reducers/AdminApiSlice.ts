import { apiSlice } from '../api/apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deletePartyForAdmin: builder.mutation({
      query: (id) => ({
        url: `/place/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminParty'],
    }),
    getAdminPartiesList: builder.query({
      query: ({ page, limit }) => ({
        url: `/admin/all/requests?page=${page}&size=${limit}`,
      }),
      providesTags: ['AdminParty'],
    }),
    getAdminParty: builder.query({
      query: (id) => ({
        url: `/admin/party/${id}`,
      }),
      providesTags: ['AdminParty'],
    }),
    updatePartyStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/request/${id}?flag=${data}`,
        method: 'POST',
      }),
      invalidatesTags: ['AdminParty'],
    }),
  }),
});
