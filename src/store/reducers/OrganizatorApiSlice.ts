import { apiSlice } from '../api/apiSlice';

export const organizatorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPartyPlace: builder.mutation({
      query: (body) => ({
        url: '/organizer/party',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OrganizatorParty'],
    }),
    participationResponse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/organizer/request/${id}?flag=${data}`, //request id
        method: 'POST',
      }),
      invalidatesTags: ['OrganizatorParty'],
    }),
    deleteParty: builder.mutation({
      query: (id) => ({
        url: `/organizer/party/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['OrganizatorParty'],
    }),
    getOrganizatorsPartiesList: builder.query({
      query: ({ page, limit }) => ({
        url: `/organizer/my-parties?page=${page}&size=${limit}`,
      }),
      providesTags: ['OrganizatorParty'],
    }),
    getOrganiatorsParty: builder.query({
      query: (id) => ({
        url: `/organizer/my-party/${id}`,
      }),
      providesTags: ['OrganizatorParty'],
    }),
    getGuestsRequests: builder.query({
      query: (id) => ({
        url: `/organizer/participation-requests/${id}`,
      }),
      providesTags: ['OrganizatorParty'],
    }),
    updateParty: builder.mutation({
      query: ({ id, data }) => ({
        url: `/organizer/party/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['OrganizatorParty'],
    }),
  }),
});
