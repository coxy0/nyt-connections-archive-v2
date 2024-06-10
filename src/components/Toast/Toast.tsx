import styles from "./Toast.module.css";

interface Props {
  visible: boolean;
  text: string;
}

const Toast = ({ visible, text }: Props) => {
  return (
    <div className={`${styles.toast} ${visible ? styles.toastVisible : ""}`}>
      <span id="toast-contents">{text}</span>
    </div>
  );
};

export default Toast;
