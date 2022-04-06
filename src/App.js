import React, { useState } from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import { RegionContext } from './Helper/Context';
import './App.css';

export default function App() {
  const [region, setRegion] = useState('kanto');
  
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      <Header />
      <Main />
    </RegionContext.Provider>
  )
}
