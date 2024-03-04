import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import HomePage from './components/homePage/HomePage';


export default function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}


