import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";
import Users from "../Users";
import ContentForm from "../Content/ContentForm";
import Timer from "../Timer";

const Menu = styled.div`
  margin-top: -50px;
  display: flex;
  justify-content: end;
  margin-right: 10px;
  margin-top: -65px;
`;

function MenuHeader({ closeLogin }) {
  // const [mainState, useMainState] = useState(false);
  const [posts, setPosts] = useState(false);
  const [timer, setTimer] = useState(false);
  const UsersInquiry = () => {
    setPosts((prevS) => !prevS);
  };

  const TimerUpToMinute = () => {
    setTimer((prevS) => !prevS);
    setPosts((prevS) => !prevS);
  };

  // const Toimer = () => {
  //   useMainState((prev) => !prev);
  // };

  return (
    <>
      <Menu>
        <Button onClick={UsersInquiry}>Users</Button>
        <Button onClick={TimerUpToMinute}>Timer</Button>
        <Button onClick={closeLogin}>Logout</Button>
      </Menu>
      <ContentForm>
        {/* {mainState? (<Users/>):(<Timer/>)} */}
        {posts && <Users />}
        {timer && <Timer />}
      </ContentForm>
    </>
  );
}

export default MenuHeader;
