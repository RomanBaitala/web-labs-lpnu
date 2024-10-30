import React, { useState } from 'react';
import SearchInput from '../FilterHud/SearchInput';
import SearchButton from '../FilterHud/SearchButton';
import FilterSelect from '../FilterHud/FilterSelect';
import FilterButton from '../FilterHud/FilterButton';
import { carsData } from '../../data/data';
import CarCard from './CarItem';
import { Container } from '../Container/Container';
import {
  Section, 
  RecommendWrapper, 
  Heading, 
  FilterContainer, 
  SelectList, 
  CarsContainer
} from './CatalogCars.styled'

const CatalogCars = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('year');
    const [filteredCars, setFilteredCars] = useState(carsData);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSortChange = (event) => {
      setSortType(event.target.value);
    };
  
    const applyFilters = () => {
      let result = [...carsData];

      if (searchQuery) {
        result = result.filter((car) =>
          car.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
      }
  
      switch (sortType) {
        case 'year':
          result.sort((a, b) => b.year - a.year);
          break;
        case 'year_rev':
          result.sort((a, b) => a.year - b.year);
          break;
        case 'price':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price_rev':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
      setFilteredCars(result);
    };

  return (
    <Section>
      <Container>
        <RecommendWrapper>
          <Heading>Cars Catalog</Heading>
          <FilterContainer>
            <SelectList>
                <li><FilterSelect label="Sort by " value={sortType} onChange={handleSortChange} /></li>
                <li><FilterButton onClick={applyFilters}/></li>
                <li><SearchInput value={searchQuery} onChange={handleSearchChange} /></li>
                <li><SearchButton onClick={applyFilters} /></li>
            </SelectList>
          </FilterContainer>
            <CarsContainer>
                {filteredCars.map((car, index) => (
                <CarCard key={index} car={car} />
                ))}
            </CarsContainer>
        </RecommendWrapper>
      </Container>
    </Section>
  );
};

export default CatalogCars;
