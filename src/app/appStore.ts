import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { meetingApi } from '@/entities/meeting/api/meetingApi'
import { rootReducer } from './appReducer'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(meetingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
