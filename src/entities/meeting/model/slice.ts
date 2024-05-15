/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChatMessages } from './types'

export interface State {
    id: string
    keyWords: Array<string>
    date: string
    duration: string
    participants: Array<string>
    generatedText: string
    userText: string | null
    quotes: Array<string>
    transcript: string
    description: string
    title: string
    done: boolean
    videoLink: string
    chatMessages: ChatMessages
}

const initialState: State = {
    id: '0',
    keyWords: [],
    date: '',
    duration: '',
    participants: [],
    generatedText: '',
    userText: null,
    quotes: [],
    transcript: '',
    description: '',
    title: '',
    done: false,
    videoLink: '',
    chatMessages: [
        {
            participant: 'Настя',
            participantId: 0,
            dateTime: '13.05.2024 19:20:51',
            text: 'Думаешь мы успеем допилить Zoom-чат до защиты?',
        },
        {
            participant: 'Поля',
            participantId: 1,
            dateTime: '13.05.2024 19:20:51',
            text: 'Ну..........',
        },
    ],
}

export const meetingSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {
        setKeyWords: (state, action: PayloadAction<Array<string>>) => {
            state.keyWords = action.payload
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        },
        setUserSummary: (state, action: PayloadAction<string | null>) => {
            state.userText = action.payload
        },
        setMeeting: (state, action: PayloadAction<any>) => {
            state.id = action.payload.id
            state.keyWords = [...action.payload.keyWords]
            state.date = action.payload.date
            state.duration = action.payload.duration
            state.participants = [...action.payload.participants]
            state.userText = action.payload.userText
            state.generatedText = action.payload.generatedText
            state.quotes = action.payload.quotes
            state.transcript = action.payload.transcript
            state.description = action.payload.description
            state.title = action.payload.title
            state.done = action.payload.done
            state.videoLink = action.payload.videoLink
        },
    },
})

export const { setKeyWords, setDate, setUserSummary, setMeeting } = meetingSlice.actions

export default meetingSlice.reducer
