import styles from "./Modal.module.css";
import { ReactNode, useState } from "react";

interface Props {
  visible: boolean;
  onClickClose: () => void;
  children: ReactNode;
}

const Modal = ({ visible, onClickClose, children }: Props) => {
  const [closing, setClosing] = useState<boolean>(false);

  return (
    <div
      className={`${styles.modal} ${
        closing ? styles.closing : visible ? styles.visible : styles.hidden
      }`}
    >
      <div className={`${styles.modalContent}`}>
        <button
          className={`${styles.closeX}`}
          onMouseDown={() => {
            setClosing(true);
            setTimeout(() => setClosing(false), 200);
            onClickClose();
          }}
        ></button>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
