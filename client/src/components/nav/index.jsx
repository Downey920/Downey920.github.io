import React from "react";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
};

export default Nav;
