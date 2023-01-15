import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/menu' element={<Menu></Menu>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
