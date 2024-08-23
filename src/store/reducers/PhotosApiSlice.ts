import { apiSlice } from '../api/apiSlice';

export const photosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPhoto: builder.mutation({
      query: (photos) => ({
        url: '/photo',
        method: 'POST',
        body: photos,
      }),
    }),
    getPhoto: builder.mutation({
      query: (credentials) => ({
        url: `/photo`,
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
