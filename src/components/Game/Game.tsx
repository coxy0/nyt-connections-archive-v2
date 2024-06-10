import styles from "./Game.module.css";
import { useState } from "react";
import Actions from "../Actions/Actions";
import Attempts from "../Attempts/Attempts";
import Board from "../Board/Board";
import Toast from "../Toast/Toast";
import { AnswersData } from "../../utils/data";
import { shuffleArray } from "../../utils/shuffleArray";
import { isAnswerCorrect } from "../../utils/words";

interface Props {
  gameData: AnswersData[];
  initialWords: string[];
}

const Game = ({ gameData, initialWords }: Props) => {
  const [words, setWords] = useState(shuffleArray(initialWords));
  const [selected, setSelected] = useState<string[]>([]);
  const [correct, setCorrect] = useState<AnswersData[]>([]);
  const [guessed, setGuessed] = useState<string[][]>([]);
  const [attempts, setAttempts] = useState(4);
  const [animatedWords, setAnimatedWords] = useState<string[]>([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");

  const showToast = (text: string, delay: number) => {
    setTimeout(() => {
      setToastVisible(true);
      setToastText(text);
      setTimeout(() => setToastVisible(false), 2500);
    }, delay);
  };

  const endGame = () => {
    showToast("Next time", 1500);
    setTimeout(() => {
      setWords([]);
      setSelected([]);
      setCorrect([
        ...correct,
        ...gameData.filter((data) => !correct.includes(data)),
      ]);
    }, 2500);
  };

  const onCardClick = (word: string) => {
    if (selected.includes(word))
      setSelected(selected.filter((selectedWord) => selectedWord !== word));
    else if (selected.length !== 4) setSelected([...selected, word]);
  };

  const onClickSubmit = () => {
    const guess = selected.sort();
    if (guessed.includes(guess)) {
      showToast("Already guessed!", 0);
      return;
    }

    const orderedGuess = words.filter((word) => guess.includes(word));
    orderedGuess.forEach((word, idx) =>
      setTimeout(() => setAnimatedWords((prev) => [...prev, word]), idx * 75)
    );
    setTimeout(() => {
      setAnimatedWords([]);

      const correctAnswer = isAnswerCorrect(guess, gameData);
      if (correctAnswer) {
        setWords(words.filter((word) => !guess.includes(word)));
        setSelected([]);
        setCorrect([...correct, correctAnswer]);
      } else {
        setGuessed([...guessed, guess]);
        setAttempts((prev) => {
          const newAttempts = prev - 1;
          if (newAttempts === 0) endGame();
          return newAttempts;
        });
      }
    }, 975);
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.gameText}>Create four groups of four!</h2>
      <Board
        words={words}
        selected={selected}
        onCardClick={onCardClick}
        correct={correct}
        animatedWords={animatedWords}
      />
      <Attempts attempts={attempts} />
      <Actions
        selected={selected}
        onClickShuffle={() => setWords(shuffleArray(words))}
        onClickDeselect={() => setSelected([])}
        onClickSubmit={onClickSubmit}
      />
      <Toast visible={toastVisible} text={toastText} />
    </div>
  );
};

export default Game;
