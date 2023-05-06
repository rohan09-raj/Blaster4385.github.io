import React, { useContext } from 'react'
import styles from './TitleCard.module.css'
import { Context } from '../../constants'
const TitleCard = ({ title, subheading }) => {

    const {openArray, setOpenArray} = useContext(Context)
    console.log(openArray.Title)
    return (
        <div className={styles.card__container}>
            <div className={openArray.Title ? `${styles.card} ${styles.card__open}` : styles.card}>
                <button className={styles.card__close__button} onClick={() => setOpenArray({
                    ...openArray,
                    Title: !openArray.Title
                })}>&times;</button>
                <div >
                    <h1 className={styles.card__title}>{title}</h1>
                </div>
                <div className={styles.card__subheading}>
                    <p>{subheading}</p>
                </div>
            </div>
        </div>
    )
}

export default TitleCard