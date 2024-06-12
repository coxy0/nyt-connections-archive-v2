import styles from "./Modal.module.css";
import { ReactNode, useState } from "react";

interface Props {
  visible: boolean;
  onClickClose: () => void;
  children: ReactNode;
}

const Modal = ({ visible, onClickClose, children }: Props) => {
  const [closing, setClosing] = useState<boolean>(false);

  const close = () => {
    setClosing(true);
    setTimeout(() => setClosing(false), 200);
    onClickClose();
  };

  return (
    <div
      className={`${styles.modal} ${
        closing ? styles.closing : visible ? styles.visible : styles.hidden
      }`}
      onClick={close}
    >
      <div
        className={`${styles.modalContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`${styles.closeX}`}
          onMouseDown={(e) => {
            e.stopPropagation();
            close();
          }}
        ></button>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
