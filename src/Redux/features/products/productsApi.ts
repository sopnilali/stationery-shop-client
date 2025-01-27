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
      }
    }),
    getSingleProducts: builder.query({
      query: (args) => {
        return {
          url: `/products/${args}`,
          method: 'GET',
        };
      }
    })    
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductsQuery } = productsApi;