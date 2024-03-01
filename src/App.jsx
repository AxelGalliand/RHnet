import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import  Employees  from './Pages/Employees';
import Header from './Component/Header';

export function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employees' element={<Employees/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App