import React from 'react';
import { Container } from '../Container/Container';
import {
  CarPageWrapper,
  PageContainer,
  Image,
  Title,
  Price,
  Location,
  Details,
  DetailItem,
  Label,
  Reviews,
  Description
} from './CarInfo.styled'


const CarItem = ({ car }) => {
  return (
    <CarPageWrapper>
        <Container>
        <PageContainer>
            <Image src={car.image} alt={car.name} />
            <Title>{car.name}</Title>
            <Price>${car.price}</Price>
            <Location>{car.location}</Location>
            
            <Details>
                <DetailItem>
                <Label>Year:</Label>
                <span>{car.year}</span>
                </DetailItem>
                <DetailItem>
                <Label>Drive:</Label>
                <span>{car.drive}</span>
                </DetailItem>
                <DetailItem>
                <Label>Fuel:</Label>
                <span>{car.fuel}</span>
                </DetailItem>
                <DetailItem>
                <Label>Transmission:</Label>
                <span>{car.transmission}</span>
                </DetailItem>
                <DetailItem>
                <Label>Mileage:</Label>
                <span>{car.mileage} km</span>
                </DetailItem>
            </Details>

            <Reviews>
                <strong>{car.reviews} Reviews</strong>
            </Reviews>

            <Description>
                {car.description}
            </Description>
        </PageContainer>
    </Container>
    </CarPageWrapper>
  );
};

export default CarItem;
