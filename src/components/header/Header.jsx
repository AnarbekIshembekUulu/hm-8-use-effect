import React from "react";
import styled from "styled-components";
import MenuHeader from "../menu-header/MenuHeader";

const HeaderTypicalPage = styled.div`
  background-color: blueviolet;
  width: 100vw;
  height: 15vh;
  margin-top: -26px;
  display: flex;
`;
const ATypicalPageText = styled.h1`
  font-size: 2rem;
  padding-top: 35px;
  padding-left: 20px;
  color: aliceblue;
  margin-top: 10px;
`;

function Header({ closeLogin }) {
  return (
    <HeaderTypicalPage>
      <ATypicalPageText>A Typical Page</ATypicalPageText>
      {closeLogin && <MenuHeader />}
    </HeaderTypicalPage>
  );
}

export default Header;
