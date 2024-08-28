import { apiSlice } from '../api/apiSlice';

export const partiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPartiesList: builder.query({
      query: ({ page, limit, city }) => ({
        url: `/public/party/all/${city}?page=${page}&size=${limit}`,
      }),
      providesTags: ['Party'],
    }),
    getParty: builder.query({
      query: (id) => ({
        url: `/public/party/my-party/${id}`,
      }),
      providesTags: ['Party'],
    }),
    getPartyTypes: builder.query({
      query: () => ({
        url: '/public/party/allTypes',
      }),
      providesTags: ['Party'],
    }),
  }),
});
