import { useState } from "react";
import data from "./assets/connections.json";
import Game from "./components/Game/Game";
import HelpModal from "./components/Modal/HelpModal";
import { getDataForDate } from "./utils/data";

const App = () => {
  const [showHelp, setShowHelp] = useState(true);

  const date = "2023-06-18";
  const dateData = getDataForDate(data, date);
  const gameData = dateData?.answers || [];
  const words = gameData?.flatMap((group) => group.members) || [];

  return (
    <>
      <HelpModal visible={showHelp} onClickClose={() => setShowHelp(false)} />
      <Game date={date} gameData={gameData} initialWords={words} />
    </>
  );
};

export default App;
