import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSearchSlice'
import configReducer from './configSlice'


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptReducer,
        langConfig: configReducer,
    }
})

export default appStore;