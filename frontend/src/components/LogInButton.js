import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <Login
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log in
      </Login>
    </Wrapper>
  );
};
const Login = styled.button`
  width:100px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  padding: 4px;
  background-color: #c83349;
  border: none;
  &:hover {
    filter: brightness(85%);
  }
`;

const Wrapper = styled.div``;

export default LogInButton;
