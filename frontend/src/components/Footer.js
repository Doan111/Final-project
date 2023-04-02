import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Foot>
        <DivCopyright>
          <FooterInfo>Burn</FooterInfo>
          <Copyright>
            {" "}
            &copy; {new Date().getFullYear()}All rights reserved
          </Copyright>
        </DivCopyright>
        <FooterInfo>About us</FooterInfo>
        <DivContact>
          <FooterInfo>Contact us </FooterInfo>
          <ContactInfo>Email:burn@fire.com</ContactInfo>
          <ContactInfo>Adress:1273 kingston street, Canada</ContactInfo>
          <ContactInfo>Phone:438-239-2390</ContactInfo>
        </DivContact>
      </Foot>
    </FooterWrapper>
  );
};
const Copyright = styled.div`
  position: relative;
  top: -370px;
  color: grey;
  font-size: 15px;
  margin-left: 10px;
`;
const DivCopyright = styled.div``;
const ContactInfo = styled(Link)`
  position: relative;
  top: -400px;
  left: 10px;
  margin: 50px 10px 0px 0px;
  color: grey;
  font-size: 15px;
`;
const DivContact = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterInfo = styled.div`
  height: auto;
  margin: 0px 0px 400px 20px;
  color: #c83349;
`;
const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  margin-top: 0;
  height: auto;
`;
const FooterWrapper = styled.div`
  position: relative;
  top: 0px;
  background-color: lightgray;
`;

export default Footer;
