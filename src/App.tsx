import { getDataForDate } from "./utils/data";
import data from "./assets/connections.json";
import Game from "./components/Game/Game";

const App = () => {
  const date = "2023-06-18";
  const dateData = getDataForDate(data, date);
  const gameData = dateData?.answers || [];
  // console.log(gameData);
  const words = gameData?.flatMap((group) => group.members) || [];

  return (
    <>
      <Game gameData={gameData} initialWords={words} />
    </>
  );
};

export default App;
