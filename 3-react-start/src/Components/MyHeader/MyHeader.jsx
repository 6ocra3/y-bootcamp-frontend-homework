import React from "react"
import classnames from "classnames"
import { ShoppingCart } from 'react-feather';
import styles from "./styles.module.css"
export function MyHeader() {
    return (<header className={styles.header}>
        <a className={styles.header__title_container}><h1 className={styles.header__title}>Магазин</h1></a>
        <a className={styles.header__href}><ShoppingCart className={styles.header__icon} size="2rem" /></a>
    </header>)
}