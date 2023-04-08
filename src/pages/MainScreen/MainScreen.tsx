import React from "react";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

import styles from "./style.module.scss";

function MainScreen() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <PostCard />
      </div>
    </div>
  );
}

export default MainScreen;
