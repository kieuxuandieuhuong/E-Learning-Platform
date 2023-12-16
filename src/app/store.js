import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Feature/user/userSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer
    }

});