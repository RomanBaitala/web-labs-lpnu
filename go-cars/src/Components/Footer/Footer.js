import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';  // Імпорт іконок
import { Container } from '../Container/Container';
import Logo from '../Logo/Logo';


const SFooter = styled.footer`
  background-color: #1c2c39;

`

const FooterContainer = styled.div`
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 4px solid #007BFF;
  max-width: 1220px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 10px;
`

const FooterColumn = styled.div`
  flex: 1;
  padding: 0 20px;

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: white;
    text-decoration: none;
    margin-bottom: 5px;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.8em;

  &:hover {
    color: #007BFF;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid #ffffff33;
  padding-top: 10px;
  max-width: 1220px;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const FooterBottomText = styled.p`
    text-align: center;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: white;
`

const Footer = () => {
  return (
    <SFooter>
        <Container>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <FooterContainer>
                
                <FooterColumn>
                    <h3>About Us</h3>
                    <a href="#about">About Us</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                </FooterColumn>
                <FooterColumn>
                    <h3>Customer Service</h3>
                    <p>Email: info@car.com</p>
                    <p>Phone: 240-865-3730</p>
                </FooterColumn>
                <FooterColumn>
                    <h3>Location</h3>
                    <p>3726 Calvin Street</p>
                    <p>Baltimore, Maryland, 21201</p>
                    <p>United States</p>
                    <SocialMedia>
                        <SocialIcon href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                        </SocialIcon>
                        <SocialIcon href="https://www.youtube.com" target="_blank">
                        <FaYoutube />
                        </SocialIcon>
                    </SocialMedia>
                </FooterColumn>
            </FooterContainer>
            <FooterBottom>
                <FooterBottomText>2024 Autohunt. All Rights Reserved.</FooterBottomText>
            </FooterBottom>
        </Container>
    </SFooter>
    
  );
};

export default Footer;
