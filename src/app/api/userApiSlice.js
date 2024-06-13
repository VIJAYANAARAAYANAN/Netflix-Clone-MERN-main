import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3001"
})

export const userApiSlice = createApi({
    baseQuery: baseQuery,
    reducerPath: 'userApi',
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const {useRegisterUserMutation} = userApiSlice

