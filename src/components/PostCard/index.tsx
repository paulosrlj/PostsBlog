import React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import { inputActions } from "../../actions/postCard";
import { toast } from "react-toastify";
import { fetchPostsActions } from "../../actions/fetchPosts";

function PostCard() {
  const dispatch = useDispatch();

  const titleValue = useSelector((state: any) => state.postCard.titleValue);
  const contentValue = useSelector((state: any) => state.postCard.contentValue);
  const valid = useSelector((state: any) => state.postCard.valid);
  const firstPageUrl = useSelector((state: any) => state.fetchPosts.firstPageUrl);
  const loggedUser = useSelector((state: any) => state.login.loggedUser);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateTitleValue(e.target.value));
    dispatch(inputActions.verifyIfIsInvalid());
  }

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateContentValue(e.target.value));
    dispatch(inputActions.verifyIfIsInvalid());
  }

  async function fetchData() {
    if (firstPageUrl == null) return;

    const response = await axios.get(firstPageUrl);

    const data = await response.data;

    dispatch(fetchPostsActions.getInitialData(data.results));
    dispatch(fetchPostsActions.updateUrl(data.next));
  }


  async function handlePostCreation() {
    const postObj = {
      username: loggedUser,
      title: titleValue,
      content: contentValue,
    };
    try {
      await axios.post("https://dev.codeleap.co.uk/careers/", postObj);
      console.log("sucesso");
      await fetchData();
      toast.success('Success!');
    } catch (error) {
      console.error(error);
      toast.error('Unespected error!');
    }
  }

  return (
    <div className={styles.postCard}>
      <Title>What’s on your mind?</Title>

      <div className={styles.inputBox}>
        <p className={styles.text}>Title</p>
        <Input
          placeholder="Hello world"
          type="text"
          styles={{ marginBottom: "24px", flex: 1 }}
          value={titleValue}
          onChange={handleTitleChange}
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.text}>Content</p>
        <Input
          placeholder="Content here"
          type="text"
          styles={{ marginBottom: "24px", paddingBottom: "50px" }}
          value={contentValue}
          onChange={handleContentChange}
        />
      </div>

      <Button
        disabled={!valid}
        styles={{ alignSelf: "flex-end" }}
        onClick={handlePostCreation}
      >
        Create
      </Button>
    </div>
  );
}

export default PostCard;
