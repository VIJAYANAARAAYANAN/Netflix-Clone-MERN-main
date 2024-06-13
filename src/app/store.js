import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {movieApiSlice} from './api/movieApiSlice'
import genreReducer from './genres/genreSlice'
import userReducer from './user/userSlice'
import { userApiSlice } from './api/userApiSlice'

export const store = configureStore({
    reducer:{
        [movieApiSlice.reducerPath]: movieApiSlice.reducer,
        genres: genreReducer,
        user: userReducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer
        

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApiSlice.middleware, userApiSlice.middleware),
    devTools: true
})

