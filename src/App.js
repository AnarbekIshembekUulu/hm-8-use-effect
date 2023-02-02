import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/login/MainContent";

function App() {
  const [loginClose, UseLoginClose] = useState(false);

  const CloseOpenLogin = () => {
    UseLoginClose((prevState) => !prevState);
    loginClose
      ? localStorage.clear()
      : localStorage.setItem("LOGIN", JSON.stringify(true));
  };

  useEffect(() => {
    const resultBoolean = localStorage.getItem("LOGIN");
    UseLoginClose(Boolean(resultBoolean));
  }, []);

  return (
    <>
      <Header />
      <MainContent closeOpenLogin={CloseOpenLogin} loginClose={loginClose} />
    </>
  );
}

export default App;
