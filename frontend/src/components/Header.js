import styled from "styled-components";
import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { FiPlusCircle } from "react-icons/fi";
import { useContext, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const { users } = useContext(CurrentUserContext);
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <Wrapper>
        <Title to="/profile">Burn</Title>
        {isAuthenticated && (
          <InputSearch
            type="text"
            id="search"
            name="search"
            placeholder="search for a user"
            onChange={(e) => {
              setUserInput(e.target.value.toLowerCase());
            }}
          />
        )}
        {userInput.length > 1 &&
          users.map((item) => {
            if (item.nickname.includes(userInput)) {
              return (
                <div>
                  <p>{item.nickname}</p>
                </div>
              );
            }
          })}
        <Nav>
          <NavLink>
            {!isAuthenticated ? (
              <LogInButton />
            ) : (
              <>
                <ProfilePic src={user.picture} alt={user.name} />{" "}
                <Icon to="/activity">
                  <FiPlusCircle style={{ fontSize: "34px" }} />
                  <Upload>Upload an activity</Upload>
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
const InputSearch = styled.input`
  text-align: center;
  border-radius: 50px;
  margin-top: 8px;
  height: 30px;
  position: relative;
  right: 420px;
`;
const Upload = styled.span`
  border: 1px solid black;
  display: none;
  position: absolute;
  top: 60px;
  left: -20px;
  width: 120px;
  padding: 8px;
  font-size: 14px;
  color: #c83349;
  background-color: lightgray;
  border-radius: 4px;
`;
const ProfilePic = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 25px;
`;

const Icon = styled(Link)`
  position: relative;
  margin: 5px 25px 0px 0px;
  padding-right: 5px;

  &:hover span {
    display: block;
  }
`;
const NavLink = styled.div`
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
const Title = styled(Link)`
  text-decoration: none;
  font-size: 35px;
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  font-family: "Oswald", sans-serif;
  margin-top: 0;
  padding: 0;
  margin-left: 20px;
  color: #c83349;
`;

export default Header;
