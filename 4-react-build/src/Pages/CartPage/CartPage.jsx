import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookCounter, getCart } from '../../store/cart/selectors'
import { BookCard } from '../../Components/BookCard/BookCard'
import s from "./styles.module.css"
import CartList from '../../Components/CartList/CartList'
export default function CartPage() {
    const dispatch = useDispatch()
    const cart = useSelector(state => getCart(state))
    console.log(Object.values(cart))
    return (
        <main className={s.cart}>
            <CartList books={Object.values(cart)} />
            {Object.values(cart).length > 0 &&
                <div className={s.booklist}>
                    {Object.values(cart).map(element =>
                        element.count > 0 && <BookCard key={element.book.id} book={element.book} />)}
                </div>}
        </main>
    )
}
