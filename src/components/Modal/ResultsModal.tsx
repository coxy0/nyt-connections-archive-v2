import styles from "./ResultsModal.module.css";
import Modal from "./Modal";

interface Props {
  visible: boolean;
  onClickClose: () => void;
  date: string;
  guessColours: string[][];
}

const ResultsModal = ({ visible, onClickClose, date, guessColours }: Props) => {
  return (
    <Modal visible={visible} onClickClose={onClickClose}>
      <h2 className={`${styles.congratsTitle}`}>Congrats!</h2>
      <div className={`${styles.puzzleTitle}`}>Connections {date}</div>
      <div className={`${styles.emojiRecap}`}>
        {Array.from({ length: 4 }).map((_, rowIdx) => (
          <div key={rowIdx} className={`${styles.resultsEmojiRow}`}>
            {Array.from({ length: 4 }).map((_, colIdx) => (
              <div
                key={colIdx}
                className={`${styles.resultsEmoji} ${
                  guessColours.length === 4
                    ? styles[guessColours[rowIdx][colIdx]]
                    : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ResultsModal;
