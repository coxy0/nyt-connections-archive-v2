import styles from "./Board.module.css";
import Card from "../Card/Card";
import Correct from "../Correct/Correct";
import { AnswersData } from "../../utils/data";

interface Props {
  correct: AnswersData[];
  words: string[];
  selected: string[];
  onCardClick: (word: string) => void;
  animatedChecking: string[];
  animatedFail: string[];
}

const Board = ({
  correct,
  words,
  selected,
  onCardClick,
  animatedChecking,
  animatedFail,
}: Props) => {
  return (
    <div className={styles.cardsContainer}>
      {correct.map((category, idx) => (
        <Correct key={idx} category={category} />
      ))}

      {words.map((word, idx) => (
        <Card
          key={idx}
          selected={selected.includes(word)}
          onClick={() => onCardClick(word)}
          text={word}
          checkAnimation={animatedChecking.includes(word)}
          failAnimation={animatedFail.includes(word)}
        />
      ))}
    </div>
  );
};

export default Board;
