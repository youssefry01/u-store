import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const categoriesAdapter = createEntityAdapter({})

const initialState = categoriesAdapter.getInitialState()

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => ({
                url: '/categories',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedCategories = responseData.map(category => {
                    category.id = category._id
                    return category
                });
                return categoriesAdapter.setAll(initialState, loadedCategories)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Category', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Category', id }))
                    ]
                } else return [{ type: 'Category', id: 'LIST' }]
            }
        }),
        addNewCategory: builder.mutation({
            query: initialCategoryData => ({
                url: '/categories',
                method: 'POST',
                body: {
                    ...initialCategoryData,
                }
            }),
            invalidatesTags: [
                { type: 'Category', id: "LIST" }
            ]
        }),
        updateCategory: builder.mutation({
            query: initialCategoryData => ({
                url: '/categories',
                method: 'PATCH',
                body: {
                    ...initialCategoryData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Category', id: arg.id }
            ]
        }),
        deleteCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Category', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useAddNewCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApiSlice

export const selectCategoriesResult = categoriesApiSlice.endpoints.getCategories.select()

const selectCategoriesData = createSelector(
    selectCategoriesResult,
    categoriesResult => categoriesResult.data
)

export const {
    selectAll: selectAllCategories,
    selectById: selectCategoryById,
    selectIds: selectCategoryIds
} = categoriesAdapter.getSelectors(state => selectCategoriesData(state) ?? initialState)