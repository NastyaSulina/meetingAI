/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-throw-literal */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const meetingApi = createApi({
    reducerPath: 'meetingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://points-app.ru:8002/api/' }),
    endpoints: (builder) => ({
        getMeetingById: builder.query<{}, string>({
            query: (id) => `meeting/${id}`,
        }),
        changeUserSummary: builder.mutation<{}, { id: string; userText: string }>({
            query: ({ id, userText }) => ({
                url: `meeting/${id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    customSummary: userText,
                }),
            }),
        }),
    }),
})

export const { useGetMeetingByIdQuery, useChangeUserSummaryMutation } = meetingApi
