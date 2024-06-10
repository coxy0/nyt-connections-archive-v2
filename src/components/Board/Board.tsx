import styles from "./Board.module.css";
import Card from "../Card/Card";
import Correct from "../Correct/Correct";
import { AnswersData } from "../../utils/data";

interface Props {
  correct: AnswersData[];
  words: string[];
  selected: string[];
  onCardClick: (word: string) => void;
  animatedWords: string[];
}

const Board = ({
  correct,
  words,
  selected,
  onCardClick,
  animatedWords,
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
          animated={animatedWords.includes(word)}
        />
      ))}
    </div>
  );
};

export default Board;
