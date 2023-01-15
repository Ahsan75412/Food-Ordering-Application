import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar></Navbar>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
