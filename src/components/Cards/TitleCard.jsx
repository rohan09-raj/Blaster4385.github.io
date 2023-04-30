import React from 'react'
import styles from './TitleCard.module.css'

const TitleCard = ({ title, subheading, open, setOpen }) => {
    return (
        <div className={styles.card__container}>
        <div className={open ? `${styles.card} ${styles.card__open}` : styles.card}>
        <button className={styles.card__close__button} onClick={() => setOpen(!open)}>&times;</button>
            <div className={styles.card__title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.card__subheading}>
                <p>{subheading}</p>
            </div>
        </div>
        </div>
    )
}

export default TitleCard