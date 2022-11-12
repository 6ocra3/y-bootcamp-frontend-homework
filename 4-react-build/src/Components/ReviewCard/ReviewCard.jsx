import s from "./styles.module.css"

export function ReviewCard({ review }) {
    return (
        <article className={s.revCard}>
            <div className={s.revCard__header}>
                <h3 className={s.revCard__name}>{review.user.name}</h3>
                <p className={s.revCard__mark}>{review.rating}</p>
            </div>
            <p className={s.revCard__review}>{review.text}</p>
        </article>
    )
}