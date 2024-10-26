import React from 'react';
import styled from 'styled-components';
import { FaStar, FaGasPump, FaCar, FaGlobe } from 'react-icons/fa'; 

const CardContainer = styled.div`
  background-color: #1c2c39;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 15px;
`;

const Price = styled.h3`
  color: #00b9ff;
  font-size: 1.5em;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
`;

const Reviews = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 0.9em;
  }
`;


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
