import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Employees } from './Pages/Employees';

export function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employees' element={<Employees/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App