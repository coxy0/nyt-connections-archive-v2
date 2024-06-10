import styles from "./Correct.module.css";
import { AnswersData } from "../../utils/data";

interface Props {
  category: AnswersData;
}

const Correct = ({ category }: Props) => {
  const colours = ["yellow", "green", "blue", "purple"];
  const colour = colours[category.level];

  return (
    <div className={`${styles.correctContainer} ${styles[colour]}`}>
      <h3 className={styles.correctTitle}>{category.group}</h3>
      <span className={styles.correctWords}>{category.members.join(", ")}</span>
    </div>
  );
};

export default Correct;
