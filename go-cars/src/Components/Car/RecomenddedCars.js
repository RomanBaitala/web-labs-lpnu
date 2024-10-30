import React, { useState } from 'react';
import CarCard from './CarItem';
import { Container } from '../Container/Container';
import { carsData } from '../../data/data';
import {
  Section,
  RecommendWrapper,
  Heading,
  CarsContainer,
  LoadMoreButton
} from './RecomenddedCars.styled'


const RecommendedCars = () => {
  const [visibleCars, setVisibleCars] = useState(3); 

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 3);
  };

  const handleLoadLess = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars - 3);
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
                <LoadMoreButton onClick={visibleCars <= 3 ? handleLoadMore : handleLoadLess}>Load {visibleCars <= 3 ? "More" : "Less"}</LoadMoreButton>
            </RecommendWrapper>
        </Container>
    </Section>
  );
};

export default RecommendedCars;