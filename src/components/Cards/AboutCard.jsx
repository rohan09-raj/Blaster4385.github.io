import React from 'react'
import styles from './AboutCard.module.css'
import { useState } from 'react'

const AboutCard = ({ open, setOpen }) => {
    const [maximise, setMaximise] = useState(false)
    
    return (
            <div className={maximise ? open ? `${styles.card} ${styles.card__open} ${styles.card__maximise}` : `${styles.card} ${styles.card__maximise}` : open ? `${styles.card} ${styles.card__open}` :styles.card}>
                <button className={styles.card__close__button} onClick={() => setOpen(!open)}>&times;</button>
                <button className={styles.card__maximise__button} onClick={() => setMaximise(!maximise)}>&#x2610;</button>
                <div>
                    <h1 className={styles.card__title}>About</h1>
                </div>
                <div className={styles.card__content}>
                    <p>"My name is Venkatesh Chaturvedi and I'm a Computer Science and Engineering student at Amity University Lucknow. I'm passionate about software development and enjoy contributing to the Android Open Source Project. In my free time, I like to explore the latest web development technologies and have been working on creating web applications using React."</p>
                </div>
            </div>
    )
}

export default AboutCard