import React from "react";
import styles from "./front.module.scss";

const Front = () => {
  return (
    <section className={styles.front}>
      <div className={styles.inner}>
        <span className={styles.breadcrumb}>Front-End</span>
      </div>
    </section>
  );
};

export default Front;
