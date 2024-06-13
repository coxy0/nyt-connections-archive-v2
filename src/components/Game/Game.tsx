import styles from "./Game.module.css";
import { useState } from "react";
import Actions from "../Actions/Actions";
import Attempts from "../Attempts/Attempts";
import Board from "../Board/Board";
import ResultsModal from "../Modal/ResultsModal";
import Toast from "../Toast/Toast";
import { AnswersData } from "../../utils/data";
import {
  exactlyThreeMatches,
  getGuessColours,
  isAnswerCorrect,
} from "../../utils/words";
import { shuffleArray } from "../../utils/shuffle";

interface Props {
  date: string;
  gameData: AnswersData[];
  initialWords: string[];
}

const Game = ({ date, gameData, initialWords }: Props) => {
  const [words, setWords] = useState(shuffleArray(initialWords));
  const [selected, setSelected] = useState<string[]>([]);
  const [correct, setCorrect] = useState<AnswersData[]>([]);
  const [guessed, setGuessed] = useState<string[][]>([]);
  const [attempts, setAttempts] = useState(4);

  const [animatedChecking, setAnimatedChecking] = useState<string[]>([]);
  const [animatedFail, setAnimatedFail] = useState<string[]>([]);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");

  const [guessColours, setGuessColours] = useState<string[][]>([]);
  const [showResults, setShowResults] = useState(false);

  const endGame = (failed: boolean) => {
    if (failed) showToast("Next time", 1500);
    console.info(guessColours);

    setTimeout(() => {
      setWords([]);
      setSelected([]);
      setCorrect([
        ...correct,
        ...gameData.filter((data) => !correct.includes(data)),
      ]);
      setTimeout(() => setShowResults(true), 500);
    }, 2500);
  };

  const showToast = (text: string, delay: number) => {
    setTimeout(() => {
      setToastVisible(true);
      setToastText(text);
      setTimeout(() => {
        setToastVisible(false);
        setToastText("");
      }, 2500);
    }, delay);
  };

  const onCardClick = (word: string) => {
    if (animatedChecking.length || animatedFail.length) return;

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
    setGuessColours((prev) => [...prev, getGuessColours(selected, gameData)]);

    const orderedGuess = words.filter((word) => guess.includes(word));
    orderedGuess.forEach((word, idx) =>
      setTimeout(() => setAnimatedChecking((prev) => [...prev, word]), idx * 75)
    );

    setTimeout(() => {
      setAnimatedChecking([]);

      const correctAnswer = isAnswerCorrect(guess, gameData);
      if (correctAnswer) {
        setWords(words.filter((word) => !guess.includes(word)));
        setSelected([]);
        setCorrect((prev) => {
          const newCorrect = [...prev, correctAnswer];
          if (newCorrect.length === 4) endGame(false);
          return newCorrect;
        });
      } else {
        setGuessed([...guessed, guess]);

        setAnimatedFail(guess);
        setTimeout(() => setAnimatedFail([]), 200);

        if (exactlyThreeMatches(guess, gameData)) showToast("One away...", 250);

        setAttempts((prev) => {
          const newAttempts = prev - 1;
          if (newAttempts === 0) endGame(true);
          return newAttempts;
        });
      }
    }, 1000);
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.gameText}>Create four groups of four!</h2>
      <Board
        words={words}
        selected={selected}
        onCardClick={onCardClick}
        correct={correct}
        animatedChecking={animatedChecking}
        animatedFail={animatedFail}
      />
      <Attempts attempts={attempts} />
      <Actions
        selected={selected}
        guessing={animatedChecking.length > 0 || animatedFail.length > 0}
        onClickShuffle={() => setWords(shuffleArray(words))}
        onClickDeselect={() => setSelected([])}
        onClickSubmit={onClickSubmit}
      />
      <Toast visible={toastVisible} text={toastText} />
      <ResultsModal
        visible={showResults}
        onClickClose={() => setShowResults(false)}
        date={date}
        guessColours={guessColours}
      />
    </div>
  );
};

export default Game;
