import { books } from "../../data"
import s from "./styles.module.css"
export function GenreList({ activeGenre, setActiveGenre }) {
    console.log(activeGenre.type)
    return (<nav className={s.nav}>
        {books.map(type =>
            <li onClick={() => setActiveGenre(type)} className={[s.type, activeGenre.type == type.type && s.active].join(' ')} key={type.id}>{type.type}</li>)}
    </nav>)
}