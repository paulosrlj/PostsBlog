import axios from "axios";
import Title from "../../Title";
import Button, { ButtonColor } from "../../Button";

type Props = {
  isOpen: any;
  setModal: any;
  postId: number;
};

import styles from "./style.module.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsActions } from "../../../actions/fetchPosts";

function DeleteModal({ isOpen, setModal, postId }: Props) {

  const dispatch = useDispatch();

  const firstPageUrl = useSelector((state: any) => state.fetchPosts.firstPageUrl);

  async function fetchData() {
    if (firstPageUrl == null) return;

    const response = await axios.get(firstPageUrl);

    const data = await response.data;

    dispatch(fetchPostsActions.getInitialData(data.results));
    dispatch(fetchPostsActions.updateUrl(data.next));
  }

  const deletePost = async () => {
    try {
      await axios.delete(`https://dev.codeleap.co.uk/careers/${postId}/`);
      toast.success("Success!");
      await fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Unespected error!");
    }
    handleModalClose();
  };

  const handleModalClose = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.modal}>
      <div onClick={handleModalClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <Title style={{ fontSize: "22px" }}>
          Are you sure you want to delete this item?
        </Title>

        <div className={styles.buttonBox}>
          <Button
            buttonColor={ButtonColor.simple}
            styles={{ marginRight: "16px" }}
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button buttonColor={ButtonColor.alert} onClick={deletePost}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
