import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Equipement from './Components/Equipment/Equipement';
import Material from './Components/Materials/Material';
import Monster from './Components/Monster/Monster';
import ErrorPage from './Components/Error/Error';
import Details from './Components/Details/Details';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Equipement />} />
            <Route path="/materials" element={<Material />} />
            <Route path="/monsters" element={<Monster />} />
            <Route path='/equipement/:id' element={<Details />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
