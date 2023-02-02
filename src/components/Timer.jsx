import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState();

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setTimerId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      clearInterval(timerId);
    }, 60000);
    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    <div>
      <TimerTag>{timer}</TimerTag>
    </div>
  );
}

export default Timer;


const TimerTag=styled.p`
  font-size: 4rem;
  margin-top: 70px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
