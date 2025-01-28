import { baseApi } from "@/Redux/api/baseApi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          Object.entries(args).forEach(([key, value]) => {
            if (value) params.append(key, value as string);
          });
        }
        return {
          url: '/products',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['products'],
    }),
    getSingleProducts: builder.query({
      query: (args) => {
        return {
          url: `/products/${args}`,
          method: 'GET',
        };
      },
      providesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: 'PUT',
        body: args.data,
      }),
      invalidatesTags: ['products'],
    }),
   deleteProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args}`,
        method: 'DELETE',
        body: args.data,
      }),
      invalidatesTags: ['products'],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
    }),   
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductsQuery, useUpdateProductMutation, useCreateProductMutation, useDeleteProductMutation } = productsApi;