import { useState } from "react";

export const Counter = () => {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  const addP1Score = () => {
    setScores((prevScores) => {
      return { ...prevScores, p1Score: prevScores.p1Score + 1 };
    });
  };
  const addP2Score = () => {
    setScores((prevScores) => {
      return { ...prevScores, p2Score: prevScores.p2Score + 1 };
    });
  };
  return (
    <div>
      <p>プレイヤー1: {scores.p1Score}</p>
      <p>プレイヤー2: {scores.p2Score}</p>
      <button onClick={addP1Score}>+1 プレイヤー1</button>
      <button onClick={addP2Score}>+1 プレイヤー2</button>
    </div>
  );
};
