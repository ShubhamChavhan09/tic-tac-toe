import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <Container>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </Container>
  );
};

export default Board;

const Container = styled.div`
  width: 320px;
  height: 320px;
  gap: 2px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;
