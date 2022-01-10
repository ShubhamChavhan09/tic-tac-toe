import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const tempBoard = [...board];
    // check if the item is clicked or if we have a  winner
    if (winner || tempBoard[index]) return;

    //
    tempBoard[index] = xIsNext ? "X" : "O";
    setBoard(tempBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div>
        {winner ? `${winner} is the Winner` : `Next: ${xIsNext ? "X" : "O"}`}
      </div>
      <button onClick={handleReset}>Restart Game</button>
    </div>
  );
};

export default Game;
