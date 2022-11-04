
import { BookCard } from "../../Components/BookCard/BookCard"
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard"
import s from "./styles.module.css"
export function ReviewPage({ book }) {
    return (
        <main className={s.main_review}>
            <section className={s.book_info}>
                <BookCard book={book} counterStyles={s.book_info__counter} />
                <article className={s.book_info__annotation}>
                    <h2>Аннотация</h2>
                    <p>{book.annotation}</p>
                </article>
            </section>
            <section className={s.review_list}>
                {book.reviews.map((review) =>
                    <ReviewCard key={review.id} review={review} />)}
            </section>

        </main>
    )
}