import React from "react";
import styled from "styled-components";

const Square = ({ value, onClick }) => {
  return <Button onClick={onClick}>{value}</Button>;
};

export default Square;
const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  font-size: 32px;
`;
