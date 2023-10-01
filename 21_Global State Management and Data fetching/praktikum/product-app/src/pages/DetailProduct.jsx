import {useNavigate, useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar';

function DetailProduct() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/product')
  }

  const location = useLocation();
  const selectedProduct = location.state.selectedProduct;


  return (
    <>
        <Navbar/>
        <main className="container-xl bg-blue-300 mx-auto px-4 md:px-16 lg:px-32 h-screen flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Product Detail: {selectedProduct.nama}</h2>
          <p>
            <strong>Product Name:</strong> {selectedProduct.nama}
          </p>
          <p>
            <strong>Product Category:</strong> {selectedProduct.kategori}
          </p>
          <p>
            <strong>Product Quality:</strong> {selectedProduct.kualitas}
          </p>
          <p>
            <strong>Product Description:</strong> {selectedProduct.deskripsi}
          </p>
          <p>
            <strong>Product Price:</strong> {selectedProduct.harga}
          </p>
          <div >
          <img className='mx-auto mt-2' src={selectedProduct.gambar} alt="Product Image" style={{ width: "300px", height: "auto" }} />
          </div>
        <button onClick={handleClick} type='button' className='mt-5 cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300'>
          Back
        </button>
        </div>
      </main>
    </>
  )
}

export default DetailProduct