import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

import styles from "./style.module.scss";
import Post from "../../components/Post";
import { useParams } from "react-router-dom";

function MainScreen() {

  const { username } = useParams();

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
