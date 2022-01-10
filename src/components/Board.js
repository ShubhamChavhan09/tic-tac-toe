import React from "react";
import Square from "./Square";

const Board = ({ onClick }) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("values")} />
      <Square value="2" onClick={() => onClick("values")} />
      <Square value="3" onClick={() => onClick("values")} />
      <Square value="4" onClick={() => onClick("values")} />
      <Square value="5" onClick={() => onClick("values")} />
      <Square value="6" onClick={() => onClick("values")} />
      <Square value="7" onClick={() => onClick("values")} />
      <Square value="8" onClick={() => onClick("values")} />
      <Square value="9" onClick={() => onClick("values")} />
    </div>
  );
};

export default Board;
