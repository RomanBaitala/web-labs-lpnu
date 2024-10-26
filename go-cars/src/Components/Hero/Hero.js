import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import HeroBanner from '../../img/HeroBg.png'

const HeroContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    max-width: 1220px;
    margin: auto;
    padding-top: 140px;
`

const HeroBG = styled.section`
  background-image: url('${HeroBanner}');
  background-size: cover;
  background-position: center;
  height: 629px;
  color: white;
  margin-top: -50px;
`

const Hero = () => {
    return (
        <HeroBG>
            <Container>
                <HeroContainer>
                    <h1>Find your dream car</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </HeroContainer>
            </Container>
        </HeroBG>
    )
}

export default Hero;