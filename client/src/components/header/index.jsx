import React from "react";
import styles from "./header.module.scss";
import Nav from "../nav";
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
        <Nav />
      </div>
    </header>
  );
};

export default Header;
