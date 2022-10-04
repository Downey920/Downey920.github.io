import React from "react";
import styles from "./home.module.scss";
import thumbnail from "../../assets/images/thumbnail-1.png";
import { Link } from "react-router-dom";
import Cards from "../../components/cards";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.inner}>
        <span className={styles.breadcrumb}>Full post</span>
        <Cards />
      </div>
    </main>
  );
};

export default Home;
