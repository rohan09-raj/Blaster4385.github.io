import React from "react";
import styles from "./Home.module.css";
import { useContext, useState } from "react";
import AboutCard from "../../components/Cards/AboutCard";
import TitleCard from "../../components/Cards/TitleCard";
import ProjectsCard from "../../components/Cards/ProjectsCard";
import ContactCard from "../../components/Cards/ContactCard";
import { Context } from "../../constants";
import Splash from "../../components/Splash/Splash";

const Home = () => {
  const { openArray, setOpenArray } = useContext(Context);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleOpen = () => {
    setOpenArray({
      ...openArray,
      About: !openArray.About,
    });
  };

  const handleHomeOpen = () => {
    setOpenArray({
      ...openArray,
      Title: !openArray.Title,
    });
  };

  const handleProjectsOpen = () => {
    setOpenArray({
      ...openArray,
      Projects: !openArray.Projects,
    });
  };

  const handleContactOpen = () => {
    setOpenArray({
      ...openArray,
      Contact: !openArray.Contact,
    });
  };

  const handleHamburger = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <div className={styles.home__container}>
      <div>
        <div className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <img
              src="https://github.com/Blaster4385.png"
              className={styles.profile__image}
            />
            <h1 className={styles.navbar__logo_heading}>Blaster4385</h1>
          </div>
          <div className={styles.navbar__links}>
            <button
              className={styles.hamburger__button}
              onClick={handleHamburger}
            >
              &#9776;
            </button>
            <button className={styles.button} onClick={handleHomeOpen}>
              Home
            </button>
            <button className={styles.button} onClick={handleOpen}>
              About
            </button>
            <button className={styles.button} onClick={handleProjectsOpen}>
              Projects
            </button>
            <button className={styles.button} onClick={handleContactOpen}>
              Contact
            </button>
          </div>
        </div>
        <div
          className={`${styles.navbar__links__responsive} ${hamburgerMenu ? styles.navbar__links__responsive_active : null}`}
        >
          <button className={styles.mobile__button} onClick={handleHomeOpen}>
            Home
          </button>
          <hr className={styles.mobile__hr} />
          <button className={styles.mobile__button} onClick={handleOpen}>
            About
          </button>
          <hr className={styles.mobile__hr} />
          <button
            className={styles.mobile__button}
            onClick={handleProjectsOpen}
          >
            Projects
          </button>
          <hr className={styles.mobile__hr} />
          <button className={styles.mobile__button} onClick={handleContactOpen}>
            Contact
          </button>
        </div>
      </div>
      <div className={styles.home__background}>
        <TitleCard
          title="It's-a me Blaster4385"
          subheading="Full time nerd, part time developer"
        />
      </div>
      <div>
        <AboutCard />
        <ProjectsCard />
        <ContactCard />
      </div>
      <Splash />
    </div>
  );
};

export default Home;

