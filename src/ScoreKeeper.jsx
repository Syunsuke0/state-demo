import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ScoreKeeper = ({ numPlayers, target }) => {
  const [scores, setScores] = useState(() =>
    Array.from({ length: numPlayers }, (_v, i) => ({
      score: 0,
      id: uuid(),
      playerName: i + 1,
    }))
  );
  const addPoint = (id) => {
    setScores((prevScores) => {
      return prevScores.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            score: player.score + 1,
          };
        }
        return player;
      });
    });
  };
  const reset = () => {
    setScores(
      Array.from({ length: numPlayers }, (_v, i) => ({
        score: 0,
        id: uuid(),
        playerName: i + 1,
      }))
    );
  };

  return (
    <div>
      <ul>
        {scores.map((player) => (
          <li key={player.id}>
            プレイヤー{player.playerName}: {player.score}
            <button onClick={() => addPoint(player.id)}>+1</button>
            {player.score >= target && "WINNER"}
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

//  style={{ minWidth: "100px" }
//  style={{ display: "flex", alignItems: "center" }}
