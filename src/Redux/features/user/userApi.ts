import { baseApi } from "@/Redux/api/baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => {
                return {
                    url: `/users/`,
                    method: 'GET',
                };
            },
            providesTags: ['users'],
        }),
        getWithMe: builder.query({
            query: () => {
                return {
                    url: `/users/me`,
                    method: 'GET',
                };
            },
            providesTags: ['users'],
        }),
        updateUser: builder.mutation({
            query: (args) => ({
              url: `/admin/users/${args.id}`,
              method: 'PUT',
              body: args.data,
            }),
            invalidatesTags: ['users'],
        }),
        updateStatus: builder.mutation({
            query: (args) => ({
              url: `/admin/users/${args}/block`,
              method: 'PATCH',
              body: args,
            }),
            invalidatesTags: ['users'],
        }),
    }),
});

export const {
    useGetAllUserQuery,
    useUpdateUserMutation,
    useUpdateStatusMutation,
    useGetWithMeQuery
} = userApi;