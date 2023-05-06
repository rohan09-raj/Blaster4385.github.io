import React from 'react'
import styles from './ProjectsCard.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../constants'

const ProjectsCard = ({ open, setOpen }) => {
    const [maximise, setMaximise] = useState(false)
    const {openArray, setOpenArray} = useContext(Context)

    const data = [
        {
            title: 'PixelBlaster-OS',
            description: 'PixelBlaster-OS is a customised fork of the Android Open Source Project (AOSP)',
            link: 'https://github.com/PixelBlaster-OS'
        },
        {
            title: 'IllusionX Kernel',
            description: 'IllusionX is a customised Linux kernel for the OnePlus 8T/9R',
            link: 'https://github.com/Blaster4385/kernel_oneplus_sm8250'
        },
        {
            title: 'Device Tree for OnePlus 8T/9R',
            description: 'This is a device tree for compiling the Android Open Source Project (AOSP) for the OnePlus 8T/9R',
            link: 'https://github.com/PixelBlaster-Devices/device_oneplus_opkona'
        },
        {
            title: 'Device Tree for Realme 3 Pro',
            description: 'This is a device tree for compiling the Android Open Source Project (AOSP) for the Realme 3 Pro',
            link: 'https://github.com/PixelBlaster-Devices/device_realme_RMX1851'
        }
    ]

    return (
        <div className={maximise ? openArray.Projects ? `${styles.card} ${styles.card__open} ${styles.card__maximise}` : `${styles.card} ${styles.card__maximise}` : openArray.Projects ? `${styles.card} ${styles.card__open}` : styles.card}>
            <button className={styles.card__close__button} onClick={() => setOpenArray({
                    ...openArray,
                    Projects: !openArray.Projects
                })}>&times;</button>
            <button className={styles.card__maximise__button} onClick={() => setMaximise(!maximise)}>&#x2610;</button>
            <div>
                <h1 className={styles.card__title}>Projects</h1>
            </div>
            {data.map((item) => (
            <div className={styles.card__content}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button className={styles.card__button}><img className={styles.card__button__icon} src='/assets/images/git.png' /><a href={item.link}>View on Github</a></button>
            </div>
            ))}
        </div>
    )
}

export default ProjectsCard