import Title from "../../Title";
import Button, { ButtonColor } from "../../Button";

import styles from './style.module.scss'
import Input from "../../Input";

type Props = {
  isOpen: any;
  setModal: any;
};

function UpdateModal({ isOpen, setModal }: Props) {
  const handleModalClose = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.modal}>
      <div onClick={handleModalClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <Title style={{fontSize: '22px'}}>Edit item</Title>

        <div className={styles.inputBox}>
        <p className={styles.text}>Title</p>
        <Input
          placeholder="Hello world"
          type="text"
          styles={{ marginBottom: "24px", flex: 1 }}
          /* value={titleValue}
          onChange={handleTitleChange} */
        />
      </div>

      <div className={styles.inputBox}>
        <p className={styles.text}>Content</p>
        <Input
          placeholder="Content here"
          type="text"
          styles={{ marginBottom: "24px", paddingBottom: "50px" }}
          /* value={contentValue}
          onChange={handleContentChange} */
        />
      </div>

        <div className={styles.buttonBox}>
          <Button
            buttonColor={ButtonColor.simple}
            styles={{ marginRight: "16px" }}
          >
            Cancel
          </Button>
          <Button buttonColor={ButtonColor.confirm} onClick={handleModalClose}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal
