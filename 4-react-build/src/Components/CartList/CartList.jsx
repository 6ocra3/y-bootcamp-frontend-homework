import React from 'react'
import s from "./styles.module.css"
export default function CartList({ books }) {
    const itog = books.reduce((acc, book) => {
        acc += book.book.price * book.count
        return acc
    }, 0)
    return (
        <div className={s.list}>
            <section>
                <h2>Ваш заказ:</h2>
                {books.map(book => (
                    <div key={book.book.id} className={s.booklist__line}>
                        <h3 className={s.booklist__name}>{book.book.name}</h3>
                        <p className={s.booklist__price}>{book.book.price * book.count}₽ </p>
                    </div>
                ))}
            </section>
            <section className={s.list__footer}>
                <h3>Итого: {itog}₽</h3>
                <button className={s.buybtn}>Купить</button>
            </section>
        </div>
    )
}
