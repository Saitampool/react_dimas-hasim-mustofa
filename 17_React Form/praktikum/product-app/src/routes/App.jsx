import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import Product from '../pages/Product'
import DetailProduct from '../pages/DetailProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Product/>} path='/product'/>
        <Route element={<DetailProduct/>} path='/product/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App