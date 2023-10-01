/* eslint-disable no-undef */
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import {article} from '../datas/article.json'

import { useDispatch, useSelector } from "react-redux"
import {addProducts, deleteProducts } from "../store/productSlice"

const Product = () => {
    const navigate = useNavigate();

    const [dataProduk, setDataProduk] = useState({
      nama: "",
      kategori: "Select",
      gambar: null,
      kualitas: "",
      deskripsi: "",
      harga: "",
    });

    const produk = useSelector((state) => state.list.product);
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({
      nama: false,
      kategori: false,
      kualitas: false,
      deskripsi: false,
      harga: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( dataProduk.nama.length >= 6 && 
            dataProduk.kategori !== "Select" && 
            dataProduk.deskripsi !== "" && 
            dataProduk.harga !== ""
            ) {
                const newProduk =  {
                  id: Date.now(),
                  nama: dataProduk.nama,
                  kategori: dataProduk.kategori,
                  kualitas: dataProduk.kualitas,
                  deskripsi: dataProduk.deskripsi,
                  harga: dataProduk.harga,
                  gambar: dataProduk.gambar,
                }
              dispatch(addProducts([...produk, newProduk]));

              setDataProduk({
                nama: "",
                kategori: "Select",
                kualitas: "",
                deskripsi: "",
                harga: "",
                gambar: null,
              });
        } else {
          setErrors({
            nama: true,
            kategori: true,
            deskripsi: true,
            harga: true
          })
        }
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataProduk({
          ...dataProduk,
          [name]: value,
        });
      };

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setDataProduk({
          ...dataProduk,
          dataProduk: file,
        });
      };

      const generateRandomPrice = () => {
        const random = Math.floor(Math.random() * 1000);
        setDataProduk({...dataProduk, harga: random})
        console.log("Random Price:", random);
      };
  return (
    <>
        <Navbar/>
        <main className='container-xl bg-blue-300 mx-auto px-4 md:px-16 lg:px-32'>
        <h2 className="mb-4 text-2xl font-semibold">{article.title.en}</h2>
        <p>{article.description.en}</p>
        <section>
          <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
            <div className='form-group mb-3'>
                  <label htmlFor="nama">Product Name</label>
                  <input 
                      id="nama"
                      name="nama"
                      type="text"
                      placeholder="Product name..."
                      minLength="6"
                      maxLength="60"
                      value={dataProduk.nama}
                      onClick={() => setErrors({nama:true})}
                      onChange={handleInputChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          errors.nama && (dataProduk.nama.length < 6 || dataProduk.nama.length > 25) ? "border-red-500" : ""
                      }`}
                  />
                  <div className="text-red-500" style={{ display: errors.nama === true ? (dataProduk.nama.length < 6 ? "block" : "none") : "none" }}>Product Name minimum 6 characters!</div>
                  <div className="text-red-500" style={{  display: dataProduk.nama.length > 25 ? "block" : "none" }}>Product Name maximum 25 characters!</div>
              </div>
              <div className='form-group mb-3'>
              <label htmlFor='kategori'>Product Category</label>
                  <select
                      name='kategori'
                      id="kategori"
                      placeholder="kategori.."
                      value={dataProduk.kategori}
                      onClick={() => setErrors({kategori:true})}
                      onChange={handleInputChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          errors.kategori && dataProduk.kategori === "Select" ? "border-red-500" : ""
                      }`}
                  >
                      <option value="Select">Select category...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
                  <div className="text-red-500" style={{ display: errors.kategori && dataProduk.kategori === "Select" ? "block" : "none" }}>Choose Category</div>
              </div>
              <div className='form-group mb-4'>
              <label htmlFor="gambar">Product Image</label>
              <input
                  type="file"
                  className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                  name='gambar'   
                  id="gambar"
                  onChange={handleFileChange} // setGambar(URL.createObjectURL(e.target.files[0]))
              />
              </div>
              <fieldset>
                <label htmlFor="kualitas">Quality</label>
                <div className="form-check">
                    <input
                        className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                        type="radio"
                        name="kualitas"
                        id="kualitas1"
                        value="Brand New"
                        onClick={handleInputChange}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="kualitas1">
                        Brand New
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                        type="radio"
                        name="kualitas"
                        id="kualitas2"
                        value="Second Hand"
                        onClick={handleInputChange}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="kualitas2">
                        Second Hand
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                        type="radio"
                        name="kualitas"
                        id="kualitas3"
                        value="Refufbished"
                        onClick={handleInputChange}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="kualitas3">
                    Refufbished
                    </label>
                </div>
              </fieldset>
              <div className='form-group mt-4'>
                  <label htmlFor="deskripsi">Product Description</label>
                  <textarea
                      id="deskripsi"
                      rows="5"
                      name='deskripsi'
                      placeholder="Product description..."
                      value={dataProduk.deskripsi}
                      onClick={() => setErrors({deskripsi:true})}
                      onChange={handleInputChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          errors.deskripsi && dataProduk.deskripsi === "" ? "border-red-500"  : ""
                      }`}
                  ></textarea>
                  <div className="text-red-500" style={{ display: errors.deskripsi === true ? (dataProduk.deskripsi === "" ? "block" : "none") : "none" }}>Add Description</div>
              </div>
              <div className='form-group mb-3'>
                  <label htmlFor='harga'>Product Price</label>
                  <input 
                      id='harga'
                      name='harga'
                      type='number'
                      placeholder="Product price..."
                      value={dataProduk.harga}
                      onClick={() => setErrors({deskripsi:true})}
                      onChange={handleInputChange}
                      onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                        errors.harga && dataProduk.harga === "" ? "border-red-500" :  ""
                      }`}
                      
                  />
                  <div className="text-red-500" style={{ display: errors.harga === true ? (dataProduk.harga === "" ? "block" : "none") : "none" }}>Add Price</div>
              </div>
              <div className='flex items-center gap-5'>
                  <button type="button" className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300" onClick={generateRandomPrice}>Generate</button>
                  <button type="submit" className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Submit</button>
              </div>
            </form>
          </section>
          <div className="container mt-5 mb-5">
          <table id="data-table" className="w-full border-collapse rounded border-2 ">
            <thead>
            <tr>
                <th className='border-2 px-2'>No</th>
                <th className='border-2 px-2'>Name</th>
                <th className='border-2 px-2'>Category</th>
                <th className='border-2 px-2'>Quality</th>
                <th className='border-2 px-2'>Description</th>
                <th className='border-2 px-2'>Price</th>
                <th className='border-2 px-2'>Detail</th>
                <th className='border-2 px-2'>Action</th>
            </tr>
            </thead>
            <tbody id="table-body">
                {produk.map((product, index) => (
                    <tr key={product.id}>
                      <td className='border-2 px-2 py-2'>{index + 1}</td>
                      <td className='border-2 px-2 py-2'>{product.nama}</td>
                      <td className='border-2 px-2 py-2'>{product.kategori}</td>
                      <td className='border-2 px-2 py-2'>{product.kualitas}</td>
                      <td className='border-2 px-2 py-2'>{product.deskripsi}</td>
                      <td className='border-2 px-2 py-2'>{product.harga}</td>
                      <td className='border-2 px-2 py-2'>
                        <button
                        className="mx-auto my-2 bg-amber-500 block text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
                        onClick={() => {
                          navigate(`/product/${product.id}`, {
                            state: { selectedProduct: product },
                          })
                        }}
                        >
                          Detail
                        </button>
                      </td>
                      <td className='border-2 px-2 py-2'>
                      <button
                        className="mx-auto my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        onClick={() => dispatch(deleteProducts(product.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        </main>
    </>
  )
}

export default Product