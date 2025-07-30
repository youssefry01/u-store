import { apiSlice } from "../../app/api/apiSlice"

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getOrdersByUserId: builder.query({
            query: id => ({
                url: `/orders/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => [
                { type: 'Orders', id: arg }
            ]
        }),
    }),
})

export const { useGetOrdersByUserIdQuery } = ordersApiSlice