import React from 'react'
import styles from './ProjectsCard.module.css'
import { useState } from 'react'

const ProjectsCard = ({ open, setOpen }) => {
    const [maximise, setMaximise] = useState(false)
    return (
        <div className={maximise ? open ? `${styles.card} ${styles.card__open} ${styles.card__maximise}` : `${styles.card} ${styles.card__maximise}` : open ? `${styles.card} ${styles.card__open}` : styles.card}>
            <button className={styles.card__close__button} onClick={() => setOpen(!open)}>&times;</button>
            <button className={styles.card__maximise__button} onClick={() => setMaximise(!maximise)}>&#x2610;</button>
            <div className={styles.card__title}>
                <h1>Projects</h1>
            </div>
            <div className={styles.card__content}>
                <h2>PixelBlaster-OS</h2>
                <p>PixelBlaster-OS is a customised fork of the Android Open Source Project (AOSP)</p>
                <button className={styles.card__button}><a href="https://github.com/PixelBlaster-OS">View on Github</a></button>
            </div>
            <div className={styles.card__content}>
                <h2>IllusionX Kernel</h2>
                <p>IllusionX is a customised Linux kernel for the OnePlus 8T/9R</p>
                <button className={styles.card__button}><a href="https://github.com/Blaster4385/kernel_oneplus_sm8250">View on Github</a></button>
            </div>
            <div className={styles.card__content}>
                <h2>Device Tree for OnePlus 8T/9R</h2>
                <p>This is a device tree for compiling the Android Open Source Project (AOSP) for the OnePlus 8T/9R</p>
                <button className={styles.card__button}><a href="https://github.com/PixelBlaster-Devices/device_oneplus_opkona">View on Github</a></button>
            </div>
            <div className={styles.card__content}>
                <h2>Device Tree for Realme 3 Pro</h2>
                <p>This is a device tree for compiling the Android Open Source Project (AOSP) for the Realme 3 Pro</p>
                <button className={styles.card__button}><a href="https://github.com/PixelBlaster-Devices/device_realme_RMX1851">View on Github</a></button>
            </div>
        </div>
    )
}

export default ProjectsCard