import styles from "./Dropdown.module.css";
import { ChangeEvent } from "react";

interface Props {
  selectedDate: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  dates: string[];
}

const Dropdown = ({ selectedDate, handleChange, dates }: Props) => {
  return (
    <div className={`${styles.dropdownContainer}`}>
      <select
        value={selectedDate}
        onChange={handleChange}
        className={`${styles.dropdown}`}
      >
        {dates.map((date, idx) => (
          <option key={idx} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
