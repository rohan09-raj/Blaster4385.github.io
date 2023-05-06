import './App.css'
import Home from './pages/Home/Home'
import React, { useState } from 'react';
import { Context, initialOpenArray } from './constants';

function App() {

  const [openArray, setOpenArray] = useState(initialOpenArray)

  return (
    <>
      <Context.Provider value={{ openArray, setOpenArray }}>
        <Home />
      </Context.Provider>
    </>
  )
}

export default App
