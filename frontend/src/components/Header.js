import styled from "styled-components";
import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Wrapper>
        <Title>Burn</Title>
        <Nav>
          <NavLink>
            {!isAuthenticated ? <LogInButton /> : <LogOutButton />}
          </NavLink>
        </Nav>
      </Wrapper>
    </div>
  );
};

const NavLink = styled(Link)``;

const Nav = styled.nav`
  margin-top: 5px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  z-index: 10;
  background-color: white;
  height: 50px;
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 35px;
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  font-family: "Oswald", sans-serif;
  margin-top: 0;
  padding: 0;
  margin-left: 20px;
  color: #c83349;
`;

export default Header;
