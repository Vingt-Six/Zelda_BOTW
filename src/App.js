import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Equipement from './Components/Equipment/Equipement';
import Material from './Components/Materials/Material';
import Monster from './Components/Monster/Monster';
import ErrorPage from './Components/Error/Error';

function App(x) {

  return (
    <div className='App'>
      {/* <Equipement/>
      <Material />
      <Monster /> */}
      <BrowserRouter> 
        <Routes>
          <Route path="/" exact element={<Equipement />} />
          <Route path="/materials" element={<Material />} />
          <Route path="/monsters" element={<Monster />} />
          <Route path='/equipement/:id' element={<h1>Bonjour</h1>} />
          <Route  path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
