import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
