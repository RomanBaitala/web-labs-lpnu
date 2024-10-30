import { Main } from './App-styled';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import CarsPage from './pages/cars-page';
import ItemPage from './pages/item-page';

function App() {
  return (
    <Main>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/cars' element={<CarsPage/>}/>
        <Route path='/car/:id' element={<ItemPage/>}/>
      </Routes>
    </Main>
  );
}

export default App;
