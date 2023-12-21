import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Feature/user/userSlice'
import courseReducer from '../Feature/course/courseSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        course:courseReducer
    }

});