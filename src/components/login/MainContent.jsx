import { useEffect, useState } from "react";
import Button from "../Button";
import ContentForm from "../Content/ContentForm";
import Input from "../Input/Input";
import MenuHeader from "../menu-header/MenuHeader";
import styled from "styled-components";

const LabelDiv = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const DivInputLabelStyleOne = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const DivInputLabelStyleSecond = styled.div`
  display: flex;
  align-items: center;
`;
const LabelDivOne = styled.div`
  margin-right: 10px;
`;
const ButtonDiv = styled.div`
  margin-top: 20px;
`;

function MainContent({ closeOpenLogin, loginClose }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsEmailValid(enteredEmail.includes("@"));
  };

  const passworChangedHandler = (event) => {
    setEnteredPassword(event.target.value);
    setIsPasswordValid(enteredPassword.trim().length >= 6);
  };

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const validateEmailHandler = () => {
    setIsFormValid(isEmailValid && isPasswordValid);
  };
  const validatePasswordHandler = () => {
    setIsFormValid(isEmailValid && isPasswordValid);
  };
  return (
    <>
      {loginClose ? (
        <MenuHeader closeLogin={closeOpenLogin} />
      ) : (
        <ContentForm>
          <DivInputLabelStyleOne>
            <LabelDivOne>
              <LabelDiv htmlFor="">E-Mail</LabelDiv>
            </LabelDivOne>
            <Input
              inputType={"email"}
              placeholder={"E-Mail"}
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </DivInputLabelStyleOne>
          <DivInputLabelStyleSecond>
            <>
              <LabelDiv htmlFor="">Password</LabelDiv>
            </>
            <Input
              inputType={"password"}
              placeholder={"PASSWORD"}
              onChange={passworChangedHandler}
              onBlur={validatePasswordHandler}
            />
          </DivInputLabelStyleSecond>
          <ButtonDiv>
            <Button onClick={closeOpenLogin} disabled={!isFormValid}>
              LOGIN
            </Button>
          </ButtonDiv>
        </ContentForm>
      )}
    </>
  );
}

export default MainContent;
