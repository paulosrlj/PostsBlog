import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./style.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

import TrashIcon from "./assets/trash.svg";
import EditIcon from "./assets/edit.svg";
import DeleteModal from "../Modal/DeleteModal";
import UpdateModal from "../Modal/UpdateModal";

function Post() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleModalOpen = (handleModal: (newValue: boolean) => void) => {
    handleModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className={styles.post}>
        <div className={styles.headerBar}></div>
        <div className={styles.header}>
          <Title>CodeLeap Network</Title>
          <div className={styles.iconContainer}>
            <img
              src={TrashIcon}
              className={styles.icon}
              style={{ marginRight: "24px" }}
              onClick={() => handleModalOpen(setDeleteModalOpen)}
            />
            <img src={EditIcon} className={styles.icon} onClick={() => handleModalOpen(setUpdateModalOpen)} />
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
              saepe officiis minus accusamus unde suscipit, quia dolor
              assumenda, eius tempora illo magni eligendi placeat hic doloribus
              iure ipsam qui! Facilis!
            </p>
          </div>
        </div>
      </div>

      {deleteModalOpen &&
        ReactDOM.createPortal(
          <DeleteModal
            isOpen={deleteModalOpen}
            setModal={setDeleteModalOpen}
          />,
          document.body
        )}

      {updateModalOpen &&
        ReactDOM.createPortal(
          <UpdateModal
            isOpen={updateModalOpen}
            setModal={setUpdateModalOpen}
          />,
          document.body
        )}
    </>
  );
}

export default Post;
