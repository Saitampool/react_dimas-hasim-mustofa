import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar';

function DetailProduct() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product')
  }

  const location = useLocation();
  const { state } = location;
  const { productId, productNama, productKategori, productKualitas, productDeskripsi, productRandomNumber } = state;


  return (
    <>
        <Navbar/>
        <main className="container-xl bg-blue-300 mx-auto px-4 md:px-16 lg:px-32 h-screen flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Product Detail: {productNama}</h2>
          <p>
            <strong>Product ID:</strong> {productId}
          </p>
          <p>
            <strong>Product Name:</strong> {productNama}
          </p>
          <p>
            <strong>Product Category:</strong> {productKategori}
          </p>
          <p>
            <strong>Product Quality:</strong> {productKualitas}
          </p>
          <p>
            <strong>Product Description:</strong> {productDeskripsi}
          </p>
          <p>
            <strong>Product Price:</strong> {productRandomNumber}
          </p>
        <button onClick={handleClick} type='button' className='mt-5 cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300'>
          Back
        </button>
        </div>
      </main>
    </>
  )
}

export default DetailProduct