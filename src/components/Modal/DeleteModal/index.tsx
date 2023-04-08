import React, { ReactNode, useEffect, useRef } from "react";
import Title from "../../Title";
import Button, { ButtonColor } from "../../Button";

type Props = {
  isOpen: any;
  setModal: any;
};

import styles from "./style.module.scss";

function DeleteModal({ isOpen, setModal }: Props) {
  const handleModalClose = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.modal}>
      <div onClick={handleModalClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <Title style={{fontSize: '22px'}}>Are you sure you want to delete this item?</Title>

        <div className={styles.buttonBox}>
          <Button
            buttonColor={ButtonColor.simple}
            styles={{ marginRight: "16px" }}
          >
            Cancel
          </Button>
          <Button buttonColor={ButtonColor.alert} onClick={handleModalClose}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
