
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AIServices from './Pages/AIServices';
import PortfolioPage from './Pages/PortfolioPage';


function App() {
  return (
    //routing
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/category/:category" element={<AIServices />} />
        <Route path='/portfolio/:category' element={<PortfolioPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
