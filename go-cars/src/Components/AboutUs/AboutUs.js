import React from 'react';
import AbtCar from '../../img/abtus_car.png';
import { Container } from '../Container/Container';
import { Section, AbtWrapper, AboutText, Title, Paragraph, Stats, StatItem, StatNumber, AboutImage, Image } from './AboutUs.styled';

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
