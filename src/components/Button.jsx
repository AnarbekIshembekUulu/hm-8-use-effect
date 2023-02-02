import React from "react";
import styled from "styled-components";

const ButtonLogin = styled.button`
  color: aliceblue;
  background-color: #c514b6;
  width: 50px;
  height: 20px;
  margin-right: 20px;
  width: 80px;
  height: 39px;
  text-align: center;
  border-style: none;
  border-radius: 20px;
  box-shadow: 4px 4px 8px -3px rgba(34, 60, 80, 0.2);
  
  &:hover{background-color: #111;color: #ffffff}
`;

function Button({ children, onClick, disabled }) {
  return (
    <ButtonLogin disabled={disabled} onClick={onClick}>
      {children}
    </ButtonLogin>
  );
}

export default Button;
