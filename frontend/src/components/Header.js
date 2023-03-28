import styled from "styled-components";

const Header = () => {
  return <div>
        <Wrapper>
            <Title>Burn</Title>
        </Wrapper>
  </div>;
};

const Wrapper = styled.div`
    height:200px;
    background-color:orange;
    margin-top:0;
    padding:0;
`;
const Title = styled.p`
    font-size:50px; 
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    font-family:'Oswald', sans-serif;
`;

export default Header;
