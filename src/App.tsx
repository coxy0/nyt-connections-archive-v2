import { useState, useEffect, ChangeEvent } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Game from "./components/Game/Game";
import HelpModal from "./components/Modal/HelpModal";
import data from "./assets/connections.json";
import { AnswersData, getAllDates, getDataForDate } from "./utils/data";

const App = () => {
  const [gameKey, setGameKey] = useState(0);
  const [allDates, setAllDates] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [gameData, setGameData] = useState<AnswersData[]>([]);
  const [initialWords, setInitialWords] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(true);

  useEffect(() => {
    setAllDates(() => {
      const allDates = getAllDates(data);
      setDate(allDates[0]);
      return allDates;
    });
  }, []);

  useEffect(() => {
    setGameKey(gameKey + 1);
    const newDateData = getDataForDate(data, date);
    const newGameData = newDateData?.answers || [];
    setGameData(newGameData);
    const words = newGameData?.flatMap((group) => group.members) || [];
    setInitialWords(words);
  }, [date]);

  return (
    <>
      <Game
        key={gameKey}
        date={date}
        gameData={gameData}
        initialWords={initialWords}
      />
      <Dropdown
        selectedDate={date}
        handleChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setDate(e.target.value)
        }
        dates={allDates}
      />
      <HelpModal visible={showHelp} onClickClose={() => setShowHelp(false)} />
    </>
  );
};

export default App;
