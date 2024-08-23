import { apiSlice } from '../api/apiSlice';

export const newsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: (credentials) => ({
        url: '/user/create/article',
        method: 'POST',
        body: { ...credentials },
      }),
      invalidatesTags: ['News'],
    }),
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/article/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['News'],
    }),
    getNewsList: builder.query({
      query: ({ page, limit }) => ({
        url: `/user/article?page=${page}&size=${limit}`,
      }),
      providesTags: ['News'],
    }),
    getNews: builder.query({
      query: (id) => ({
        url: `/user/article/${id}`,
      }),
      providesTags: ['News'],
    }),
    getAdminNewsList: builder.query({
      query: ({ page, limit }) => ({
        url: `/admin/redactor/article?page=${page}&size=${limit}`,
      }),
      providesTags: ['News'],
    }),
    getAdminNews: builder.query({
      query: (id) => ({
        url: `/admin/redactor/article/${id}`,
      }),
      providesTags: ['News'],
    }),
    updateNewsStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/redactor/article/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['News'],
    }),
  }),
});
