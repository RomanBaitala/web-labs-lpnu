import styled from 'styled-components'
import HeroBanner from '../../img/HeroBg.png'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    max-width: 1220px;
    margin: auto;
    padding-top: 140px;
`

export const HeroBG = styled.section`
  background-image: url('${HeroBanner}');
  background-size: cover;
  background-position: center;
  height: 629px;
  color: white;
`
