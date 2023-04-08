import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

import styles from "./style.module.scss";
import Post from "../../components/Post";

function MainScreen() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <PostCard />
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  );
}

export default MainScreen;
