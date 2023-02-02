import styled from 'styled-components';


const LoginForm = styled.div`
  margin-top: 70px;
  width: 50vw;
  height: 30vh;
  background-color: antiquewhite;
  margin-left: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 4px 4px 8px -3px rgba(34, 60, 80, 0.2);
`;


function ContentForm({children}) {
  return (
    <LoginForm>{children}</LoginForm>
  )
}

export default ContentForm;