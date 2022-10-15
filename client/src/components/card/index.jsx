import React, { useState } from "react";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import thumbnail from "../../assets/images/thumbnail-1.png";
import { useEffect } from "react";

const Card = () => {
  const [testList, setTestList] = useState(undefined);

  useEffect(() => {
    axios //
      .get("http://localhost:4000/api/test")
      .then((res) => setTestList(res.data));
  }, []);
  return (
    <li className={styles.card}>
      {testList?.map((test) => {
        return (
          <>
            <span>{test.id}</span>
            <span>{test.text}</span>
          </>
        );
      })}
      <div className={styles.thumbnailContainer}>
        <Link to="/">
          <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
        </Link>
      </div>
      <div className={styles.metadata}>
        <h1 className={styles.metadata__title}>JavaScript 입문</h1>
        <p className={styles.metadata__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est corporis at harum iusto fugit ducimus doloremque voluptates
          laudantium aut corrupti, minus quam illo omnis ipsa ad cumque unde
          atque.
        </p>
        <span className={styles.metadata__date}>2022.09.29</span>
      </div>
    </li>
  );
};

export default Card;
