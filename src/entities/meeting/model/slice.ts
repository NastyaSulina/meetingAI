/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
    keyWords: Array<string>
    date: string
    duration: string
    participants: Array<string>
}

const initialState: State = {
    keyWords: [
        'художник',
        'искусство',
        'современное искусство',
        'хорошее искусство',
        'произведение искусства',
        'работа',
        'успех',
        'профессиональное образование',
        'продажа картин',
    ],
    date: '13.10.2019',
    duration: '20:13',
    participants: ['Интервьюер', 'Тимофей Смирнов'],
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
    },
})

export const { setKeyWords, setDate } = meetingSlice.actions

export default meetingSlice.reducer
