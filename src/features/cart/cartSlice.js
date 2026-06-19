import { createSlice } from "@reduxjs/toolkit";

const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []

const initialState = {
  items: savedCartItems,
}

const saveCartToLocalStorage = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items))
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const product = action.payload

            const existingItem = state.items.find((item) => item.id === product.id)

            if(existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({...product, quantity: 1})
            }
            saveCartToLocalStorage(state.items)
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload)

            if(item) {
                item.quantity += 1
            }
            saveCartToLocalStorage(state.items)
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find ((item) => item.id === action.payload)

            if (item && item.quantity > 1){
                item.quantity -= 1
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload)
            }
            saveCartToLocalStorage(state.items)
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)

            saveCartToLocalStorage(state.items)
        },

        clearCart: (state) => {
            state.items = []

            saveCartToLocalStorage(state.items)
        },
    },
})

export const {addToCart,
     removeFromCart, 
     clearCart, 
     increaseQuantity, 
     decreaseQuantity 
} = cartSlice.actions

export default cartSlice.reducer