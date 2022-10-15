import React from "react";
import styles from "./cards.module.scss";
import Card from "../card";

const Cards = () => {
  return (
    <ul className={styles.cards}>
      <Card />
    </ul>
  );
};

export default Cards;
