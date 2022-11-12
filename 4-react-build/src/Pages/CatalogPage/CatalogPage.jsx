import { BookCard } from "../../Components/BookCard/BookCard";
import { GenreList } from "../../Components/GenresList/GenreList";
import s from "./styles.module.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres, selectBooks } from "../../store/genres/selectors";
import { loadGenreBooks, loadGenres } from "../../store/genres/loadGenres";
import { loadBooks } from "../../store/books/loadBooks";
export const CatalogPage = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => selectGenres(state))
    const books = useSelector(state => selectBooks(state))
    const [activeGenre, setActiveGenre] = useState()
    useEffect(() => {
        dispatch(loadGenres)
    }, [])
    useEffect(() => {
        if (activeGenre) {
            dispatch(loadGenreBooks(activeGenre?.id))
        }
    }, [activeGenre])
    return (
        <main className={s.shop}>
            {genres.length > 0 && <GenreList genres={genres} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />}
            {activeGenre &&
                <div className={s.booklist}>
                    {books.map(book =>
                        <BookCard key={book.id} book={book} />)}
                </div>}
        </main>
    )
}