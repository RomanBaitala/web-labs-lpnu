import React from 'react';
import { FaStar, FaGasPump, FaCar, FaGlobe } from 'react-icons/fa'; 
import { CardContainer, ImageContainer, CardBody, Price, Info, Detail, Reviews } from './CarItem.styled';

const CarCard = ({ car }) => {
  const { image, name, price, location, year, drive, fuel, reviews } = car;

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <CardBody>
        <h3>{name}</h3>
        <Price>{price}</Price>
        <Info>
          <Detail><FaGlobe /> {location}</Detail>
          <Detail><FaCar /> {year} • {drive}</Detail>
          <Detail><FaGasPump /> {fuel}</Detail>
        </Info>
        <Reviews>
          <FaStar style={{ color: '#FFD700' }} />
          <span>{reviews} Reviews</span>
        </Reviews>
      </CardBody>
    </CardContainer>
  );
};

export default CarCard;
