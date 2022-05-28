import React from 'react';
import { HashRouter,  Route, Routes } from 'react-router-dom'
import './App.scss';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Signup2 from './components/Signup2';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route path='/signup2' element={<Signup2/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
