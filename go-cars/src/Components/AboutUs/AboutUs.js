import React from 'react';
import styled from 'styled-components';
import AbtCar from '../../img/abtus_car.png'
import { Container } from '../Container/Container';

const Section = styled.section`
    background-color: #1c2c39;
`

const AbtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1220px;
  padding: 40px;
  color: white;
  margin: 0 auto;
`;

const AboutText = styled.div`
  max-width: 50%;
`;

const Title = styled.h2`
  font-size: 2em;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5em;
  margin: 0;
`;

const AboutImage = styled.div`
  max-width: 50%;
`;

const Image = styled.img`
  width: 530px;
  height: 421px;
  border-radius: 10px;
`;

const AboutUs = () => {
  return (
    <Section>
        <Container>
            <AbtWrapper>
                <AboutText>
                        <Title>About Us</Title>
                        <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit.
                        Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat at interdum in.
                        Venentatis arcu semper lectus quis sit in rhoncus auctor.
                        </Paragraph>
                        <Stats>
                            <StatItem>
                                <StatNumber>150</StatNumber>
                                <p>Vehicle In Stock</p>
                            </StatItem>
                            <StatItem>
                                <StatNumber>40</StatNumber>
                                <p>Sold Car</p>
                            </StatItem>
                            <StatItem>
                                <StatNumber>38</StatNumber>
                                <p>Happy Customer</p>
                            </StatItem>
                            <StatItem>
                                <StatNumber>5</StatNumber>
                                <p>Awards</p>
                            </StatItem>
                        </Stats>
                    </AboutText>
                    <AboutImage>
                        <Image src={AbtCar} alt="Car" />
                    </AboutImage>
            </AbtWrapper>
        </Container>
    </Section>
  );
};

export default AboutUs;
