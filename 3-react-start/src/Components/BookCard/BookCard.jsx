import React, { useState } from "react"
import { Minus, Plus } from "react-feather"
import s from "./styles.module.css"
export function BookCard({ book, counterStyles }) {
    var [cnt, setCnt] = useState(0)

    return (<section className={s.card}>
        <div className={s.card__content}>
            <h2 className={s.card__name}>{book.name}</h2>
            <div>
                <p className={s.card__info}>{book.authors.join(", ")}</p>
                <p className={s.card__info}>{book.genre}</p>
                <p className={s.card__info}>{book.mark}</p>
            </div>
            <p className={s.card__price}>{book.price} ₽</p>
        </div>
        <div className={[s.counter, counterStyles].join(" ")}>
            <button className={s.counter__button} disabled={cnt < 1} onClick={() => setCnt(cnt - 1)}><Minus color="white" /></button>
            <p className={[s.counter__num, cnt === 0 && s.counter__num_disabled].join(" ")}>{cnt}</p>
            <button className={s.counter__button} onClick={() => setCnt(cnt + 1)}><Plus color="white" /></button>
        </div>
    </section>)
}