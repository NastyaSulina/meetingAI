import { combineReducers } from '@reduxjs/toolkit'
import meetingReducer from '@/entities/meeting/model/slice'
import { meetingApi } from '@/entities/meeting/api/meetingApi'

export const rootReducer = combineReducers({
    meeting: meetingReducer,
    [meetingApi.reducerPath]: meetingApi.reducer,
})
