import styles from "./Attempts.module.css";

interface Props {
  attempts: number;
}

const Attempts = ({ attempts }: Props) => {
  return (
    <div className={styles.attemptsRemainingContainer}>
      <p>Mistakes remaining:</p>
      <div className={styles.attemptsRemainingBubblesContainer}>
        {Array.from({ length: attempts }).map((_, idx) => (
          <div key={idx} className={styles.attemptsRemainingBubble}></div>
        ))}
      </div>
    </div>
  );
};

export default Attempts;
