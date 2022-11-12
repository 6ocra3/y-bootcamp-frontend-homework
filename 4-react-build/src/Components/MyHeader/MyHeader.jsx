import React from "react"
import classnames from "classnames"
import { ShoppingCart } from 'react-feather';
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
export function MyHeader() {
    return (<header className={styles.header}>
        <Link to={""} className={styles.header__title_link}><h1 className={styles.header__title}>Магазин</h1></Link>
        {/* <Link to={"/cart"}><a ><ShoppingCart className={styles.header__icon} size="2rem" /></a></Link> */}
        <Link to={"/cart"} className={styles.header__href}><ShoppingCart className={styles.header__icon} size="2rem" /></Link>
    </header>)
}