/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-throw-literal */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const meetingApi = createApi({
    reducerPath: 'meetingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://points-app.ru:8002/api/' }),
    endpoints: (builder) => ({
        getMeetingById: builder.query<any, string>({
            query: (id) => `meeting/${id}`,
        }),
    }),
})

export const { useGetMeetingByIdQuery } = meetingApi

// TODO: Добавить обработку ошибок
export const mutateUserSummary = async (id: string, userText: string | null) =>
    await fetch(`https://points-app.ru:8002/api/meeting/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            customSummary: userText,
        }),
    }).catch((err) => {
        console.log('Error in fetch', err)
    })
