import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import Header from "./components/header";
import Home from "./pages/home";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
