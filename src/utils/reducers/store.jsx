import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'utils/features/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
