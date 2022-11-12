export const selectGenreModule = (state) => state.genres

export const selectGenres = (state) => { return (Object.values((state.genres.entities))) };

export const selectBooks = (state) => { return (Object.values(state.genreBooks.entities)) }