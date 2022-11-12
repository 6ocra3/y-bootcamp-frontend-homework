
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { BookCard } from "../../Components/BookCard/BookCard"
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard"
import { loadBooks } from "../../store/books/loadBooks"
import { getBook } from "../../store/books/selectors"
import s from "./styles.module.css"
export function ReviewPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const book = useSelector((state) => getBook(state, id))
    console.log(book)
    useEffect(() => {
        dispatch(loadBooks("d75f762a-eadd-49be-8918-ed0gfa8989d024"))
        dispatch(loadBooks(id))
    }, [])
    return (
        <main className={s.main_review}>
            {!!book && <><section className={s.book_info}>
                <BookCard book={book} counterStyles={s.book_info__counter} />
                <article className={s.book_info__annotation}>
                    <h2>Аннотация</h2>
                    <p>{book.annotation}</p>
                </article>
            </section>
                <section className={s.review_list}>
                    {book.reviews.map((review) =>
                        <ReviewCard key={review.id} review={review} />)}
                </section></>}
        </main>
    )
}