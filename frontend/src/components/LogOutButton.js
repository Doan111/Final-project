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
const LogOut = styled.button``;

export default LogOutButton;
