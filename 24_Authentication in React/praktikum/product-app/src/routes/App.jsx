import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import Product from '../pages/Product'
import DetailProduct from '../pages/DetailProduct'
import UpdateProduct from '../pages/UpdateProduct'
import Login from '../pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Product/>} path='/product'/>
        <Route element={<Login/>} path='/auth/login'/>
        <Route element={<DetailProduct/>} path='/detail/:id'/>
        <Route element={<UpdateProduct/>} path='/product/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App