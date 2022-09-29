import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Front from "./pages/front";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/front" element={<Front />} />
      </Routes>
    </div>
  );
};

export default App;
