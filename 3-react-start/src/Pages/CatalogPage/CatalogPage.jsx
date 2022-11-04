import { BookCard } from "../../Components/BookCard/BookCard";
import { GenreList } from "../../Components/GenresList/GenreList";
import { books } from "../../data";
import s from "./styles.module.css"
import React, { useState } from "react";
export function CatalogPage() {
    var [activeGenre, setActiveGenre] = useState(books[0])
    return (
        <main className={s.shop}>
            <GenreList activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            <div className={s.booklist}>
                {activeGenre.books.map(book =>
                    <BookCard key={book.id} book={book} />)}
                {/* <BookCard /> */}
            </div>
        </main>
    )
}