import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <FontAwesomeIcon className={styles.logo} icon={faCode} />
        </div>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>Front-end</li>
          <li className={styles.menu__item}>Back-end</li>
          <li className={styles.menu__item}>CS</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
