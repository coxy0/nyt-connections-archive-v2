import styles from "./Actions.module.css";

interface Props {
  selected: string[];
  guessing: boolean;
  onClickShuffle: () => void;
  onClickDeselect: () => void;
  onClickSubmit: () => void;
}

const Actions = ({
  selected,
  guessing,
  onClickShuffle,
  onClickDeselect,
  onClickSubmit,
}: Props) => {
  return (
    <div className={styles.boardActionsContainer}>
      <button
        type="button"
        className={styles.boardActionButton}
        onClick={onClickShuffle}
      >
        Shuffle
      </button>
      <button
        type="button"
        className={`${styles.boardActionButton} ${styles.boardDeselectButton}`}
        onClick={onClickDeselect}
        disabled={!selected.length}
      >
        Deselect all
      </button>
      <button
        type="button"
        className={`${styles.boardActionButton} ${styles.boardSubmitButton}`}
        onClick={onClickSubmit}
        disabled={selected.length < 4 || guessing}
      >
        Submit
      </button>
    </div>
  );
};

export default Actions;
