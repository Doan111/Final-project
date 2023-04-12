import styled from "styled-components";
import Footer from "./Footer";
import LogInButton from "./LogInButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import React from "react";
const Homepage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }
  return (
    <>
      <Container>
        <Wrapper>
          <Information>
            <Text1>
              Train,Track and Share your workouts with a single platform
            </Text1>
            <Text2>
              "Fuel your fire with Burn - a community-driven platform where
              physical activity becomes a collective achievement, and motivation
              is the oxygen that keeps the flames burning."
            </Text2>
            <Text3>Already a member?</Text3>
            <LogInButton />
            {/* <Text3>
              If not, click here to <BorderBottom>sign up!</BorderBottom>
            </Text3> */}
          </Information>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

const BorderBottom = styled.span`
  &:hover {
    background-color: red;
  }
`;
const Text3 = styled.p`
  font-size: 15px;
  margin-top: 25px;
`;

const Text2 = styled.p`
  font-size: 25px;
  margin-top: 100px;
`;
const Text1 = styled.p`
  font-size: 35px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Information = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  position: relative;
  top: 300px;
  border-color: none;
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  font-family: "Oswald", sans-serif;
  text-align: center;
  padding-top: 50px;
`;

const Container = styled.div`
  background-image: url("../images/Background1.jpg");
  height: 1240px;
  width: 100%;
  margin-top: 0;
  position: relative;
  top: 0px;
  
`;

export default Homepage;
