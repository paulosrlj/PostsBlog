import React from "react";

import styles from "./style.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

import TrashIcon from "./assets/trash.svg";
import EditIcon from "./assets/edit.svg";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.headerBar}></div>
      <div className={styles.header}>
        <Title>CodeLeap Network</Title>
        <div className={styles.iconContainer}>
          <img
            src={TrashIcon}
            className={styles.icon}
            style={{ marginRight: "24px" }}
          />
          <img src={EditIcon} className={styles.icon} />
        </div>
      </div>
      <div>
        <div className={styles.headerInfo}>
          <p className={styles.text}>@Victor</p>
          <p className={styles.text}>25 minutes ago</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            saepe officiis minus accusamus unde suscipit, quia dolor assumenda,
            eius tempora illo magni eligendi placeat hic doloribus iure ipsam
            qui! Facilis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
