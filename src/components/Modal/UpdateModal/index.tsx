import axios from "axios";
import Title from "../../Title";
import Button, { ButtonColor } from "../../Button";

import styles from "./style.module.scss";
import Input from "../../Input";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsActions } from "../../../actions/fetchPosts";

type Props = {
  isOpen: any;
  setModal: any;
  postId: number;
};

function UpdateModal({ isOpen, setModal, postId }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const firstPageUrl = useSelector((state: any) => state.fetchPosts.firstPageUrl);


  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  const handleModalClose = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  async function fetchData() {
    if (firstPageUrl == null) return;

    const response = await axios.get(firstPageUrl);

    const data = await response.data;

    dispatch(fetchPostsActions.getInitialData(data.results));
    dispatch(fetchPostsActions.updateUrl(data.next));
  }


  const UpdatePost = async () => {
    const updateObj = {
      title: title,
      content: content,
    };

    try {
      await axios.patch(
        `https://dev.codeleap.co.uk/careers/${postId}/`,
        updateObj
      );
      toast.success("Success!");
      await fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Unespected error!");
    }

    handleModalClose();
  };

  return (
    <div className={styles.modal}>
      <div onClick={handleModalClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <Title style={{ fontSize: "22px" }}>Edit item</Title>

        <div className={styles.inputBox}>
          <p className={styles.text}>Title</p>
          <Input
            placeholder="Hello world"
            type="text"
            styles={{ marginBottom: "24px", flex: 1 }}
            onChange={handleTitleChange}
            value={title}
          />
        </div>

        <div className={styles.inputBox}>
          <p className={styles.text}>Content</p>
          <Input
            placeholder="Content here"
            type="text"
            styles={{ marginBottom: "24px", paddingBottom: "50px" }}
            onChange={handleContentChange}
            value={content}
          />
        </div>

        <div className={styles.buttonBox}>
          <Button
            buttonColor={ButtonColor.simple}
            styles={{ marginRight: "16px" }}
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button buttonColor={ButtonColor.confirm} onClick={UpdatePost}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
