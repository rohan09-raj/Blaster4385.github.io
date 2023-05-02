import React from 'react'
import styles from './ContactCard.module.css'
import { useState } from 'react'

const ContactCard = ({ open, setOpen }) => {
    const [maximise, setMaximise] = useState(false)
    
    return (
            <div className={maximise ? open ? `${styles.card} ${styles.card__open} ${styles.card__maximise}` : `${styles.card} ${styles.card__maximise}` : open ? `${styles.card} ${styles.card__open}` :styles.card}>
                <button className={styles.card__close__button} onClick={() => setOpen(!open)}>&times;</button>
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