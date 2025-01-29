import { baseApi } from "@/Redux/api/baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (userInfo) => ({
                url: "/orders",
                method: "POST",
                body: userInfo,
            }),
            invalidatesTags: ['orders']
        }),
        getOrders: builder.query({
            query: () => {
                return {
                    url: `/orders/`,
                    method: 'GET',
                };
            },
            providesTags: ['orders'],
        }),
        getAllOrders: builder.query({
            query: () => {
                return {
                    url: `/orders/all`,
                    method: 'GET',
                };
            },
            providesTags: ['orders'],
        }),
        verifyOrder: builder.mutation({
            query: (args) => ({
                url: `/orders/${args}/verify`,
                method: 'PATCH',
                body: args,
            }),
            invalidatesTags: ['orders'],
        }), 
        shippedOrder: builder.mutation({
            query: (args) => ({
                url: `/orders/${args}/confirm`,
                method: 'PATCH',
                body: args,
            }),
            invalidatesTags: ['orders'],
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useGetOrdersQuery,
    useGetAllOrdersQuery,
    useShippedOrderMutation,
    useVerifyOrderMutation,
} = orderApi;