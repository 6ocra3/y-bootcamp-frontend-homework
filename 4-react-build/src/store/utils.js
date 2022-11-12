export const normalizeGenresData = (data) => {
    return {
        entities: data.data.reduce((acc, genre) => {
            acc[genre.id] = genre
            return acc
        }, {}),
        ids: data.data.map(({ id }) => id)
    }
}

export const normalizeGenreBooks = (data) => {
    return {
        entities: data.data.reduce((acc, { name, annotation, authors, id, mark, price, subgenre }) => {
            acc[id] = { name, annotation, authors, id, mark, price, subgenre }
            return acc
        }, {}),
        ids: data.data.map(({ id }) => id)
    }
}

export const normalizeBooks = (data) => {
    return {
        entities: data.data.reduce((acc, book) => {
            acc[book.id] = book
            return acc
        }, {}),
        ids: data.data.map(({ id }) => id)
    }
}