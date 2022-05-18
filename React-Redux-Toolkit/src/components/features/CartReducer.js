import { createSlice,createReducer } from "@reduxjs/toolkit";
import cartItemsApi from '../../cartItemsApi';

const initialState = {
    cartItem : cartItemsApi,
    amount:0,
    total:0
}

const CartReducer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) =>
        {
          state.cartItem = []
        },
        increase:(state,action) => 
        {
            const cartItem = state.cartItem.find((item) => item.id === action.payload.id);
            cartItem.amount = cartItem.amount+1;
        },
        decrease:(state,action)=>
        {
            const cartItem = state.cartItem.find((item) => item.id === action.payload.id);
            cartItem.amount -= 1;
        },
        removeItem: (state, action) => {
          const itemId = action.payload;        
         state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
        },
        toggleAmount:(state) =>
        {
          let amount=0;
          let total=0;
          
          state.cartItem.forEach(item => {
            amount += item.amount;
            total  = amount * item.price;
            
          })
          state.amount = amount;
          state.total = total;
        }
         
    }
})
export const {increase,decrease,removeItem,clearCart,toggleAmount} = CartReducer.actions;
export default CartReducer.reducer;