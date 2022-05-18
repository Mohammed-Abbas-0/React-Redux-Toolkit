import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './components/features/CartReducer';
import ModelReducer from './components/features/ModelReducer';
export const store = configureStore({
    reducer:{
        cart:CartReducer,
        model:ModelReducer,
    }
});