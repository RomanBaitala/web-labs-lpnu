import React, { useState } from 'react';
import styled from 'styled-components';
import CarCard from './CarItem';
import { Container } from '../Container/Container';

const Section = styled.section`
  padding: 40px;
  background-color: #141b24;
`;

const RecommendWrapper = styled.div`
    max-width: 1220px;
    margin: 0 auto;
`;

const Heading = styled.h2`
  color: white;
  font-size: 2em;
  margin-bottom: 20px;
`;

const CarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LoadMoreButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const carsData = [
  {
    name: 'Tesla Model 3 Standard Range Plus',
    price: '$56,690',
    location: 'Florida, USA',
    year: '2020',
    drive: 'Rear-wheel Drive',
    fuel: 'Electric',
    reviews: '12',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPExsqcuJoGDKCo_gJPoCj8e_CaANOGHJG3w&s',
  },
  {
    name: 'Ford F-250 Super Duty',
    price: '$82,098',
    location: 'Milan, Italy',
    year: '2021',
    drive: 'Four-wheel Drive',
    fuel: 'Diesel',
    reviews: '12',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZyAqFD8UaAe6TPfGTJQScSl0xJu4XER6OA&s',
  },
  {
    name: 'Honda Pilot Touring 7-Passenger',
    price: '$43,735',
    location: 'Caracas, Venezuela',
    year: '2021',
    drive: 'All-wheel Drive',
    fuel: 'Gasoline',
    reviews: '12',
    image: 'https://cdn.ebizautos.media/used-2021-honda-pilot-blackeditionawd-14381-21899563-1-640.jpg',
  },
  {
    name: 'BMW X5 M',
    price: '$92,800',
    location: 'Berlin, Germany',
    year: '2022',
    drive: 'Four-wheel Drive',
    fuel: 'Diesel',
    reviews: '20',
    image: '/path/to/bmw-image.jpg',
  },
  {
    name: 'Mercedes-Benz G-Class',
    price: '$131,750',
    location: 'Los Angeles, USA',
    year: '2022',
    drive: 'Four-wheel Drive',
    fuel: 'Gasoline',
    reviews: '35',
    image: '/path/to/mercedes-image.jpg',
  },
  {
    name: 'Mercedes-Benz G-Class',
    price: '$131,750',
    location: 'Los Angeles, USA',
    year: '2022',
    drive: 'Four-wheel Drive',
    fuel: 'Gasoline',
    reviews: '35',
    image: '/path/to/mercedes-image.jpg',
  },
];

const RecommendedCars = () => {
  const [visibleCars, setVisibleCars] = useState(3); 

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 3);
  };

  return (
    <Section>
        <Container>
            <RecommendWrapper>
                <Heading>Recommended Cars</Heading>
                <CarsContainer>
                    {carsData.slice(0, visibleCars).map((car, index) => (
                    <CarCard key={index} car={car} />
                    ))}
                </CarsContainer>
                    {visibleCars < carsData.length && (
                    <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
                )}
            </RecommendWrapper>
        </Container>
    </Section>
  );
};

export default RecommendedCars;