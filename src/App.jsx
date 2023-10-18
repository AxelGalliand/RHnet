import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'

export function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App