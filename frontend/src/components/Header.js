import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Wrapper>
        <Title>Burn</Title>
        <Nav>
          <NavLink to="/signup">Log in</NavLink>
        </Nav>
      </Wrapper>
    </div>
  );
};

const NavLink = styled(Link)`
  text-decoration: none;
  background-color: #c83349;
  color: white;
  border-radius: 10px;
  margin-right: 20px;
  padding: 5px;
  &:hover {
    filter: brightness(85%);
  }
`;

const Nav = styled.nav`
  margin-top: 0;
  font-size: 25px;
`;

const Wrapper = styled.div`
  background-color: white;
  height: 100px;
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
