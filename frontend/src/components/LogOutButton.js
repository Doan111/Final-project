import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <Wrapper>
      <LogOut
        onClick={() => {
          logout();
        }}
      >
        Log out
      </LogOut>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const LogOut = styled.button`
  width: 100px;
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

export default LogOutButton;
