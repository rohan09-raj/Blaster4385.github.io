import React from 'react'
import styles from './Home.module.css'
import { useState } from 'react'
import AboutCard from '../../components/Cards/AboutCard'
import TitleCard from '../../components/Cards/TitleCard'
import ProjectsCard from '../../components/Cards/ProjectsCard'
import ContactCard from '../../components/Cards/ContactCard'

const Home = () => {

    const [open, setOpen] = useState(false)
    const [homeOpen, setHomeOpen] = useState(true)
    const [projectsOpen, setProjectsOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleHomeOpen = () => {
        setHomeOpen(!homeOpen)
    }

    const handleProjectsOpen = () => {
        setProjectsOpen(!projectsOpen)
    }

    const handleContactOpen = () => {
        setContactOpen(!contactOpen)
    }

    const handleHamburger = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <img src="https://github.com/Blaster4385.png" className={styles.profile__image} />
                    <h1 className={styles.navbar__logo_heading}>Blaster4385</h1>
                </div>
                <div className={styles.navbar__links}>
                    <button className={styles.hamburger__button} onClick={handleHamburger}>&#9776;</button>
                    <button className={styles.button} onClick={handleHomeOpen}>Home</button>
                    <button className={styles.button} onClick={handleOpen}>About</button>
                    <button className={styles.button} onClick={handleProjectsOpen}>Projects</button>
                    <button className={styles.button} onClick={handleContactOpen}>Contact</button>
                </div>
            </div>
            <div className={`${styles.navbar__links__responsive} ${hamburgerMenu ? styles.navbar__links__responsive_active : null}`}>
                <button className={styles.mobile__button} onClick={handleHomeOpen}>Home</button>
                <hr className={styles.mobile__hr}/>
                <button className={styles.mobile__button} onClick={handleOpen}>About</button>
                <hr className={styles.mobile__hr}/>
                <button className={styles.mobile__button} onClick={handleProjectsOpen}>Projects</button>
                <hr className={styles.mobile__hr}/>
                <button className={styles.mobile__button} onClick={handleContactOpen}>Contact</button>
            </div>
            <TitleCard
                title="It's-a me Blaster4385"
                subheading="Full time nerd, part time developer"
                open={homeOpen}
                setOpen={setHomeOpen}
            />
            <div>
                <AboutCard
                    open={open}
                    setOpen={setOpen} />
                <ProjectsCard
                    open={projectsOpen}
                    setOpen={setProjectsOpen}
                />
                <ContactCard
                    open={contactOpen}
                    setOpen={setContactOpen}
                />
            </div>
        </>
    )
}

export default Home