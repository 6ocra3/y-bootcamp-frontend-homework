import { genreBooksSlice, genresSlice } from "."
import { normalizeGenreBooks, normalizeGenresData } from "../utils"

export const loadGenres = (dispatch, getState) => {
    dispatch(genresSlice.actions.startLoading())
    fetch("http://localhost:3001/genres").then(response => response.json()).then((data) => {
        // data.data.map(({ id }) => { console.log(id) })
        // console.log(data.data.reduce((acc, genre) => {
        //     acc[genre.id] = genre
        //     return acc
        // }, {}))
        dispatch(genresSlice.actions.succesLoading(normalizeGenresData(data)))
    }).catch(() => {
        dispatch(genresSlice.actions.failedLoading())
    })
}

export const loadGenreBooks = (id) => (dispatch, getState) => {
    dispatch(genreBooksSlice.actions.startLoading())
    fetch(`http://localhost:3001/genres/${id}`).then(response => response.json()).then((data) => {
        // data.data.map(({ id }) => { console.log(id) })
        // console.log(data.data.reduce((acc, genre) => {
        //     acc[genre.id] = genre
        //     return acc
        // }, {}))
        dispatch(genreBooksSlice.actions.succesLoading(normalizeGenreBooks(data)))
    }).catch(() => {
        dispatch(genreBooksSlice.actions.failedLoading())
    })
}