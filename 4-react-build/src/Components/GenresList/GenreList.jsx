import { useEffect } from "react"
import { books } from "../../data"
import s from "./styles.module.css"
export function GenreList({ genres, activeGenre, setActiveGenre }) {
    useEffect(() => {
        setActiveGenre(genres[0])
    }, [])
    return (
        <>
            {activeGenre && <nav className={s.nav}>
                {genres.map(genre =>
                    <li onClick={() => { setActiveGenre(genre) }} className={[s.type, activeGenre.name == genre.name && s.active].join(' ')} key={genre.id}>{genre.name}</li>)}
                {/* <li className={[s.type].join(' ')} key={genre.id}>{genre.name}</li>)} */}

            </nav>}
        </>)
}