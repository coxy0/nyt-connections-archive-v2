import styles from "./Card.module.css";

interface Props {
  selected: boolean;
  onClick: () => void;
  text: string;
  animated: boolean;
}

const Card = ({ selected, onClick, text, animated }: Props) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.cardSelected : ""} ${
        animated ? styles.cardGuessAnim : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Card;
