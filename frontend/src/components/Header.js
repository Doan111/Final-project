import styled from "styled-components";
import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { FiPlusCircle } from "react-icons/fi";
const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Wrapper>
        <Title>Burn</Title>
        <Nav>
          <NavLink>
            {!isAuthenticated ? (
              <LogInButton />
            ) : (
              <>
                <ProfilePic src={user.picture} alt={user.name} />{" "}
                <Icon>
                  <FiPlusCircle style={{ fontSize: '34px' }}/>
                </Icon>{" "}
                <LogOutButton />
              </>
            )}
          </NavLink>
        </Nav>
      </Wrapper>
    </div>
  );
};

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 25px;
`;

const Icon = styled.div`
  margin: 5px 25px 0px 0px;
  padding-right: 5px;
  &:hover {
    border-right: 1px solid black;
  }
`;
const NavLink = styled(Link)`
  display: flex;
`;

const Nav = styled.nav`
  margin-top: 5px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  z-index: 10;
  background-color: lightgrey;
  height: 75px;
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
