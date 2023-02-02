import styled from "styled-components";

const InputLogin = styled.input`
  width: 500px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;
const InputStyleDiv = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 30px;
`;
const StyleDiv = styled.div`
  display: flex;
`;
function Input({ inputType, placeholder, onChange, onBlur, value }) {
  return (
    <StyleDiv>
      <InputStyleDiv>
        <InputLogin
          value={value}
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          onBlur={onBlur}
        />
      </InputStyleDiv>
    </StyleDiv>
  );
}

export default Input;
