import React from "react";
import styles from "./home.module.scss";
import thumbnail from "../../assets/images/thumbnail-1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.inner}>
        <span className={styles.breadcrumb}>Full post</span>
        <ul className={styles.contents}>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <Link to="/">
                <img
                  className={styles.thumbnail}
                  src={thumbnail}
                  alt="thumbnail"
                />
              </Link>
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
          <li className={styles.content}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className={styles.metadata}>
              <h1 className={styles.metadata__title}>JavaScript 입문</h1>
              <p className={styles.metadata__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis est corporis at harum iusto fugit ducimus doloremque
                voluptates laudantium aut corrupti, minus quam illo omnis ipsa
                ad cumque unde atque.
              </p>
              <span className={styles.metadata__date}>2022.09.29</span>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
