import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { genreBooksSlice, genresSlice } from "./genres";
import { cartSlice } from "./cart";
import { booksSlice } from "./books";
export const store = configureStore({
    reducer: combineReducers({
        genres: genresSlice.reducer,
        genreBooks: genreBooksSlice.reducer,
        cart: cartSlice.reducer,
        books: booksSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});