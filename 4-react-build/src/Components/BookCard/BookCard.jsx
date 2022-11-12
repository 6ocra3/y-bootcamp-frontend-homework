import React, { useState } from "react"
import { Minus, Plus } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { cartSlice } from "../../store/cart"
import { getBookC, getBookCounter } from "../../store/cart/selectors"
import s from "./styles.module.css"
export function BookCard({ book, counterStyles }) {
    const dispatch = useDispatch()
    const counter = useSelector(state => getBookCounter(state, book.id))
    return (<section className={s.card}>
        <div className={s.card__content}>
            <Link to={`/books/${book.id}`} className={s.card__link}><h2 className={s.card__name}>{book.name}</h2></Link>
            <div>
                <p className={s.card__info}>{book.authors.join(", ")}</p>
                <p className={s.card__info}>{book.genre}</p>
                <p className={s.card__info}>{book.mark}</p>
            </div>
            <p className={s.card__price}>{book.price} ₽</p>
        </div>
        <div className={[s.counter, counterStyles].join(" ")}>
            <button className={s.counter__button} disabled={(counter || 0) < 1} onClick={() => dispatch(cartSlice.actions.removeFromCart(book))}><Minus color="white" /></button>
            <p className={[s.counter__num, counter === 0 && s.counter__num_disabled].join(" ")}>{counter || 0}</p>
            <button className={s.counter__button} onClick={() => dispatch(cartSlice.actions.addToCart(book))}><Plus color="white" /></button>
        </div>
    </section>)
}