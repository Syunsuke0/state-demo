import "./App.css";
import { Counter } from "./Counter";
import { FruitClicker } from "./FruitClicker";
import { ScoreKeeper } from "./ScoreKeeper";

function App() {
  return (
    <div>
      {/* <Counter />
      <FruitClicker /> */}
      <ScoreKeeper numPlayers={10} target={3} />
    </div>
  );
}

export default App;
