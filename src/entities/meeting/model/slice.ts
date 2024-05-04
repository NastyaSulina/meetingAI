/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
    id: string
    keyWords: Array<string>
    date: string
    duration: string
    participants: Array<string>
    summary: {
        generatedText: string
        userText: string
    }
    quotes: Array<string>
    transcript: string
    description: string
    title: string
    done: boolean
    videoLink: string
}

const initialState: State = {
    id: '0',
    keyWords: [],
    date: '',
    duration: '',
    participants: [],
    summary: {
        generatedText: '',
        userText: '',
    },
    quotes: [],
    transcript: '',
    description: '',
    title: '',
    done: false,
    videoLink: '',
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
        setSummary: (state, action: PayloadAction<string>) => {
            state.summary.userText = action.payload
        },
        setMeeting: (state, action: PayloadAction<State>) => {
            state.id = action.payload.id
            state.keyWords = [...action.payload.keyWords]
            state.date = action.payload.date
            state.duration = action.payload.duration
            state.participants = [...action.payload.participants]
            state.summary = { ...action.payload.summary }
            state.quotes = action.payload.quotes
            state.transcript = action.payload.transcript
            state.description = action.payload.description
            state.title = action.payload.title
            state.done = action.payload.done
            state.videoLink = action.payload.videoLink
        },
    },
})

export const { setKeyWords, setDate, setSummary, setMeeting } = meetingSlice.actions

export default meetingSlice.reducer
