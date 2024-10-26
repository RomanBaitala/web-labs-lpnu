import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import RecommendedCars from './Components/Car/RecomenddedCars';
import { Main } from './App-styled';

function App() {
  return (
    <Main>
      <Header/>
      <Hero/>
      <AboutUs/>
      <RecommendedCars/>
      <Footer/>
    </Main>
  );
}

export default App;
