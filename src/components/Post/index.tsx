import { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./style.module.scss";
import Title from "../Title";


import TrashIcon from "./assets/trash.svg";
import EditIcon from "./assets/edit.svg";
import DeleteModal from "../Modal/DeleteModal";
import UpdateModal from "../Modal/UpdateModal";
import { useSelector } from "react-redux";

type Props = {
  title: string;
  username: string;
  content: string;
  createdDate: number;
  id: number;
}

function Post({ title, username, content, createdDate, id}: Props) {

  const currentUser = useSelector((state: any) => state.signUpInput.inputValue);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleModalOpen = (handleModal: (newValue: boolean) => void) => {
    handleModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className={styles.post} >
        <div className={styles.headerBar}></div>
        <div className={styles.header}>
          <Title>{title}</Title>
          {currentUser === username && (
            <div className={styles.iconContainer}>
            <img
              src={TrashIcon}
              className={styles.icon}
              style={{ marginRight: "24px" }}
              onClick={() => handleModalOpen(setDeleteModalOpen)}
            />
            <img src={EditIcon} className={styles.icon} onClick={() => handleModalOpen(setUpdateModalOpen)} />
          </div>
          )}
        </div>
        <div>
          <div className={styles.headerInfo}>
            <p className={styles.text}>@{username}</p>
            <p className={styles.text}>{createdDate} minutes ago</p>
          </div>
          <div>
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>

      {deleteModalOpen &&
        ReactDOM.createPortal(
          <DeleteModal
            isOpen={deleteModalOpen}
            setModal={setDeleteModalOpen}
            postId={id}
          />,
          document.body
        )}

      {updateModalOpen &&
        ReactDOM.createPortal(
          <UpdateModal
            isOpen={updateModalOpen}
            setModal={setUpdateModalOpen}
            postId={id}
          />,
          document.body
        )}
    </>
  );
}

export default Post;
