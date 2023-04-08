import React from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import { inputActions } from "../../actions/postCard";

function PostCard() {
  const titleValue = useSelector((state: any) => state.postCard.titleValue);
  const contentValue = useSelector((state: any) => state.postCard.contentValue);
  const valid = useSelector((state: any) => state.postCard.valid);

  const dispatch = useDispatch();

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateTitleValue(e.target.value));
    dispatch(inputActions.verifyIfIsInvalid());
  }

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputActions.updateContentValue(e.target.value));
    dispatch(inputActions.verifyIfIsInvalid());
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

      <Button disabled={!valid} styles={{ alignSelf: "flex-end" }}>Create</Button>
    </div>
  );
}

export default PostCard;
