import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <FontAwesomeIcon className={styles.logo} icon={faCode} />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link to="/front">Front-End</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/back">Back-End</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/cs">CS</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
