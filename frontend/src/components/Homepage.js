import styled from "styled-components";

const Homepage = () => {
  return <Container>
    Test Homepage
  </Container>;
};
const Container = styled.div`
  background-image: url("../images/Background1.jpg");
  height:1200px;
  width:100%;
  margin-top:0;
  position:relative;
  top: -200px;
  z-index: -1000;
`;


export default Homepage;
