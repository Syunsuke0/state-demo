import { useState } from "react";
import { v4 as uuid } from "uuid";

const randomFruit = () => {
  const choices = ["🍎", "🍌", "🍈", "🍋", "🍇", "🍑"];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const FruitClicker = () => {
  const [fruits, setFruits] = useState([{ id: uuid(), fruit: randomFruit() }]);
  const addFruit = () => {
    setFruits((prevFruits) => [
      ...prevFruits,
      { id: uuid(), fruit: randomFruit() },
    ]);
  };
  const deleteFruit = (id) => {
    setFruits((prevFruits) => {
      return prevFruits.filter((e) => e.id !== id);
    });
  };
  const makeEverythingStrawberry = () => {
    setFruits((prevFruits) => {
      return prevFruits.map((fruit) => {
        return { ...fruit, fruit: "🍓" };
      });
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
          {e.fruit}
        </span>
      ))}
      <button onClick={addFruit}>絵文字を追加する</button>
      <button onClick={makeEverythingStrawberry}>すべてイチゴにする</button>
    </div>
  );
};
