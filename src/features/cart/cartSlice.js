import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        added: (state, action) => {
            state.numOfItems.push(action.payload)
        },
        removed: (state, action) => {
            state.numOfItems = state.numOfItems.filter(item => item !== action.payload)
        }
    }
})

export default cartSlice.reducer
export const { added, removed } = cartSlice.actions;