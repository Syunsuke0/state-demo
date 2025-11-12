import { useState } from "react";
import { v4 as uuid } from "uuid";

const randomFruit = () => {
  const choices = ["🍎", "🍌", "🍈", "🍋", "🍇", "🍑"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const FruitClicker = () => {
  const [fruits, setFruits] = useState([{ id: uuid(), emoji: randomFruit() }]);
  const addFruit = () => {
    setFruits((prevFruits) => [
      ...prevFruits,
      { id: uuid(), emoji: randomFruit() },
    ]);
  };
  const deleteFruit = (id) => {
    setFruits((prevFruits) => {
      return prevFruits.filter((e) => e.id !== id);
    });
  };

  return (
    <div>
      {fruits.map((e) => (
        <span
          onClick={() => deleteFruit(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addFruit}>絵文字を追加する</button>
    </div>
  );
};

export default FruitClicker;
