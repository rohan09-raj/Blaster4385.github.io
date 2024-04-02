import React from "react";
import styles from "./ContactCard.module.css";
import { useContext, useState } from "react";
import { Context } from "../../constants";
import useDragger from "../../hooks/useDragger";

const ContactCard = ({ open, setOpen }) => {
  const [maximise, setMaximise] = useState(false);
  const { openArray, setOpenArray } = useContext(Context);

  useDragger("contact", setMaximise);

  return (
    <div
      id="contact"
      className={
        maximise
          ? openArray.Contact
            ? `${styles.card} ${styles.card__open} ${styles.card__maximise}`
            : `${styles.card} ${styles.card__maximise}`
          : openArray.Contact
          ? `${styles.card} ${styles.card__open}`
          : styles.card
      }
    >
      <button
        className={styles.card__close__button}
        onClick={() =>
          setOpenArray({
            ...openArray,
            Contact: !openArray.Contact,
          })
        }
      >
        &times;
      </button>
      <button
        className={styles.card__maximise__button}
        onClick={() => setMaximise(!maximise)}
      >
        &#x2610;
      </button>
      <div>
        <h1 className={styles.card__title}>Contact Me</h1>
      </div>
      <div className={styles.card__content}>
        <p>You can contact me on:</p>
        <p className={styles.card__content__item}>
          <img
            src="/assets/images/telegram.png"
            className={styles.card__content__icon}
          />
          <a href="https://t.me/V3NK4135H">Telegram</a>
        </p>
        <p className={styles.card__content__item}>
          <img
            src="/assets/images/linkedin.png"
            className={styles.card__content__icon}
          />
          <a href="https://www.linkedin.com/in/blaster4385/">Linkedin</a>
        </p>
        <p className={styles.card__content__item}>
          <img
            src="/assets/images/git.png"
            className={styles.card__content__icon}
          />
          <a href="https://github.com/Blaster4385">Github</a>
        </p>
        <p className={styles.card__content__item}>
          <img
            src="/assets/images/gmail.png"
            className={styles.card__content__icon}
          />
          <a href="mailto:blaster4385@tablaster.dev">Email</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
