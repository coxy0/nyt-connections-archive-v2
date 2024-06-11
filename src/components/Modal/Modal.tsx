import styles from "./Modal.module.css";
import { ReactNode, useState } from "react";

interface Props {
  id: string;
  visible: boolean;
  onClickClose: () => void;
  children: ReactNode;
}

const Modal = ({ id, visible, onClickClose, children }: Props) => {
  const [closing, setClosing] = useState<boolean>(false);

  return (
    <div
      id={id}
      className={`${styles.modal} ${
        closing ? styles.closing : visible ? styles.visible : styles.hidden
      }`}
    >
      <div className="modal-content">
        <button
          id="close-modal"
          className="close-x"
          onMouseDown={() => {
            setClosing(true);
            setTimeout(() => setClosing(false), 200);
            onClickClose();
          }}
        ></button>
        <div id="inner-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
