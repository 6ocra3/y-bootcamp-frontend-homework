import s from "./styles.module.css"

export function ReviewCard({ review }) {
    return (
        <article className={s.revCard}>
            <div className={s.revCard__header}>
                <h3 className={s.revCard__name}>{review.name}</h3>
                <p className={s.revCard__mark}>{review.mark}</p>
            </div>
            <p className={s.revCard__review}>{review.review}</p>
        </article>
    )
}