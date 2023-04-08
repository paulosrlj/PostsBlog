import React from "react";

import styles from "./style.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

function PostCard() {
  return (
    <div className={styles.postCard}>
      <Title>What’s on your mind?</Title>

      <div className={styles.inputBox}>
        <p className={styles.text}>Title</p>
        <Input
          placeholder="Hello world"
          type="text"
          styles={{  marginBottom: "24px", flex: 1}}
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.text}>Content</p>
        <Input
          placeholder="Content here"
          type="text"
          styles={{  marginBottom: "24px", paddingBottom: '50px' }}
        />
      </div>

      <Button styles={{alignSelf: 'flex-end'}}>Create</Button>
    </div>
  );
}

export default PostCard;
