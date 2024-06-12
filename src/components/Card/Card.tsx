import styles from "./Card.module.css";

interface Props {
  selected: boolean;
  onClick: () => void;
  text: string;
  checkAnimation: boolean;
  failAnimation: boolean;
}

const Card = ({
  selected,
  onClick,
  text,
  checkAnimation,
  failAnimation,
}: Props) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.cardSelected : ""} ${
        checkAnimation ? styles.cardCheckAnim : ""
      } ${failAnimation ? styles.cardFailAnim : ""}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Card;
