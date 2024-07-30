import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/home';

import Session from './Pages/Session';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Session />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
