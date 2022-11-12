import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addToCart: (state, action) => {
            state[action.payload.id] = {
                count: (state[action.payload.id]?.count || 0) + 1,
                book: action.payload
            }
        },
        removeFromCart: (state, action) => {
            state[action.payload.id] = {
                count: state[action.payload.id]?.count == 0 ? 0 : state[action.payload.id]?.count - 1,
                book: action.payload
            }
        }
    }
})