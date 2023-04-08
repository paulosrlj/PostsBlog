import axios from "axios";

import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

import styles from "./style.module.scss";
import Post from "../../components/Post";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostTypeCleaned, fetchPostsActions } from "../../actions/fetchPosts";

function MainScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUser = useSelector((state: any) => state.login.loggedUser);

  const currentUrl = useSelector((state: any) => state.fetchPosts.currentUrl);
  const firstPageUrl = useSelector(
    (state: any) => state.fetchPosts.firstPageUrl
  );
  const postsData = useSelector((state: any) => state.fetchPosts.data);

  if (!loggedUser) {
    navigate("/");
  }

  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    if (currentUrl == null) return;

    const response = await axios.get(currentUrl);

    const data = await response.data;

    dispatch(fetchPostsActions.updateUrl(data.next));
    dispatch(fetchPostsActions.updateData(data.results));
  }

  useEffect(() => {
    setIsLoading(true);

    async function fetchDataInitial() {
      if (firstPageUrl == null) return;

      try {
        const response = await axios.get(firstPageUrl);
        const data = await response.data;
        dispatch(fetchPostsActions.getInitialData(data.results));
        dispatch(fetchPostsActions.updateUrl(data.next));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataInitial();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
        setIsLoading(true);
        fetchData()
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData, isLoading]);

  return (
    <div className={styles.limiterContainer}>
      <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <PostCard />

        {postsData.map((post: PostTypeCleaned) => (
          <Post
            content={post.content}
            createdDate={post.created_datetime}
            id={post.id}
            title={post.title}
            username={post.username}
            key={post.id}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default MainScreen;
