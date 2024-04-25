import { combineReducers } from '@reduxjs/toolkit'
import meetingReducer from '@/entities/meeting/model/slice'

export const rootReducer = combineReducers({ meeting: meetingReducer })
