import { booksSlice } from "."
import { normalizeBooks } from "../utils"

export const loadBooks = (id) => (dispatch, getState) => {
    dispatch(booksSlice.actions.startLoading())
    fetch(`http://localhost:3001/books/${id}`).then(response => response.json()).then((data) => {
        // data.data.map(({ id }) => { console.log(id) })
        // console.log(data.data.reduce((acc, genre) => {
        //     acc[genre.id] = genre
        //     return acc
        // }, {}))
        const acc = {}
        acc[data.data.id] = data.data
        dispatch(booksSlice.actions.succesLoading({ entities: acc, ids: data.data.id }))
    }).catch(() => {
        dispatch(booksSlice.actions.failedLoading())
    })
}