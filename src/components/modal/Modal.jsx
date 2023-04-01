import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, title, deleteInfo, value }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>!!!</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <i className="bx bx-x" style={{ marginBottom: "-3px" }}></i>
          </button>
          <div className={styles.modalContent}>
            آیا مطمین هستی برای حذف این
            {" " + title}?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                لغو
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => {
                  deleteInfo(value);
                  setIsOpen(false);
                }}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
