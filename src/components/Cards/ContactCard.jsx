import React from 'react'
import styles from './ContactCard.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../constants'

const ContactCard = ({ open, setOpen }) => {
    const [maximise, setMaximise] = useState(false)
    const {openArray, setOpenArray} = useContext(Context)
    
    return (
            <div className={maximise ? openArray.Contact ? `${styles.card} ${styles.card__open} ${styles.card__maximise}` : `${styles.card} ${styles.card__maximise}` : openArray.Contact ? `${styles.card} ${styles.card__open}` :styles.card}>
                <button className={styles.card__close__button} onClick={() => setOpenArray({
                    ...openArray,
                    Contact: !openArray.Contact
                })}>&times;</button>
                <button className={styles.card__maximise__button} onClick={() => setMaximise(!maximise)}>&#x2610;</button>
                <div>
                    <h1 className={styles.card__title}>Contact Me</h1>
                </div>
                <div className={styles.card__content}>
                    <p>You can contact me on:</p>
                    <p><a href="https://t.me/V3NK4135H">Telegram</a></p>
                    <p><a href="https://github.com/Blaster4385">Github</a></p>
                    <p><a href="mailto:venkateshchaturvedi12@gmail.com">Gmail</a></p>
                </div>
            </div>
    )
}

export default ContactCard