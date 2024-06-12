import styles from "./HelpModal.module.css";
import Modal from "./Modal";

interface Props {
  visible: boolean;
  onClickClose: () => void;
}

const HelpModal = ({ visible, onClickClose }: Props) => {
  return (
    <Modal visible={visible} onClickClose={onClickClose}>
      <h2>How to play Connections</h2>
      <p className={styles.subtitle}>
        Find groups of four items that share something in common.
      </p>
      <ul>
        <li>
          Select four items and tap 'Submit' to check if your guess is correct.
        </li>
        <li>Find the groups without making 4 mistakes!</li>
      </ul>
      <p className={styles.subtitle}>Category Examples</p>
      <ul>
        <li>FISH: Bass, Flounder, Salmon, Trout</li>
        <li>FIRE ___: Ant, Drill, Island, Opal</li>
      </ul>
      <p>
        Categories will always be more specific than "5-LETTER WORDS", "NAMES"
        or "VERBS."
      </p>
      <p>
        Each puzzle has exactly one solution. Watch out for words that seem to
        belong to multiple categories!
      </p>
      <div className={styles.colourDescriptions}>
        <p>
          Each group is assigned a colour, which will be revealed as you solve:
        </p>
        <>
          <ul className={`${styles.helpEmojis}`}>
            <img
              className={`${styles.helpArrow}`}
              src="https://www.nytimes.com/games-assets/v2/metadata/help_arrow.svg"
              alt="levels description arrow"
            ></img>
            <div className={`${styles.emojiRow}`}>
              <span className={`${styles.helpEmoji} ${styles.yellow}`}></span>
              Straightforward
            </div>
            <div className={`${styles.emojiRow}`}>
              <span className={`${styles.helpEmoji} ${styles.green}`}></span>
            </div>
            <div className={`${styles.emojiRow}`}>
              <span className={`${styles.helpEmoji} ${styles.blue}`}></span>
            </div>
            <div className={`${styles.emojiRow}`}>
              <span className={`${styles.helpEmoji} ${styles.purple}`}></span>
              Tricky
            </div>
          </ul>
        </>
      </div>
    </Modal>
  );
};

export default HelpModal;
