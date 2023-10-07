/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2"

import Navbar from '../components/Navbar';
import {article} from '../datas/article.json'

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [namaBoolean, setNamaBoolean] = useState(false);
  const [kategoriBoolean, setKategoriBoolean] = useState(false);
  const [deskripsiBoolean, setDeskripsiBoolean] = useState(false);
  const [hargaBoolean, setHargaBoolean] = useState(false);
  const [gambar, setGambar] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDeleteIndex, setProductToDeleteIndex] = useState(null);
  const [data, setData] = useState();
  const [dataProduk, setDataProduk] = useState({
    nama: "",
    kategori: "Select",
    kualitas: "",
    deskripsi: "",
    harga: "",
  });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setDataProduk({ ...dataProduk, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (
        dataProduk.nama.length >= 6 && 
        dataProduk.kategori !== "Select" && 
        dataProduk.deskripsi !== "" && 
        dataProduk.price !== "") {
          const newProduct = {
              nama: dataProduk.nama,
              kategori: dataProduk.kategori,
              kualitas: dataProduk.kualitas,
              deskripsi: dataProduk.deskripsi,
              harga: dataProduk.harga,
            };

          try {
            const response  = await axios.post("https://651eb45144a3a8aa4768d77a.mockapi.io/products", newProduct);

            if (response.status === 201) {
              Swal.fire({
                icon:'success',
                title: 'Berhasil menambah data',
                confirmButtonText: "OK"
              })
              console.log('Data berhasil ditambahkan:', response.data);
              setDataProduk({
                nama: "",
                kategori: "Select",
                kualitas: "",
                deskripsi: "",
                harga: "",
              })
            }
          } catch (error) {
            Swal.fire({
              icon:'error',
              title: 'Gagal menambah data',
              text: `Pesan kesalahan : ${error}`,
              confirmButtonText: "OK"
          })
          }
      } else {
        setNamaBoolean(true);
        setKategoriBoolean(true);
        setDeskripsiBoolean(true);
        setHargaBoolean(true);
      }
  };

  const getProducts = () => {
      axios.get(
          `https://651eb45144a3a8aa4768d77a.mockapi.io/products`
      )
      .then((response) => {
          setData(response?.data)
      })
      .catch((error) => {
          Swal.fire({
              icon:'error',
              title: 'Gagal mengambil data',
              text: `Pesan kesalahan : ${error}`,
              confirmButtonText: "OK"
          })
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleDelete = (id) => {
    axios
    .delete(`https://651eb45144a3a8aa4768d77a.mockapi.io/products/${id}`)
    .then((response) => {
      Swal.fire({
        icon:'success',
        title: 'Berhasil menghapus data',
        text: `Pesan berhasil : ${response}`,
        confirmButtonText: "OK"
      })
      console.log('Data berhasil dihapus:', response);
      getProducts();
      setShowDeleteModal(false);
      setProductToDeleteIndex(null);
    })
    .catch((error) => {
      Swal.fire({
        icon:'error',
        title: 'Gagal menghapus data',
        text: `Pesan kesalahan : ${error}`,
        confirmButtonText: "OK"
      })
    });
  }

    
  const handleShowDeleteModal = (id) => {
      setProductToDeleteIndex(id);
      setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
      setShowDeleteModal(false);
      setProductToDeleteIndex(null);
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
                      maxLength="50"
                      value={dataProduk.nama}
                      onClick={() => setNamaBoolean(true)}
                      onChange={handleChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          namaBoolean && (dataProduk.nama.length < 6 || dataProduk.nama.length > 25) ? "border-red-500" : ""
                      }`}
                  />
                  <div className="text-red-500" style={{ display: namaBoolean === true ? (dataProduk.nama.length < 6 ? "block" : "none") : "none" }}>Product Name minimum 6 characters!</div>
                  <div className="text-red-500" style={{  display: dataProduk.nama && dataProduk.nama.length > 25 ? "block" : "none" }}>Product Name maximum 25 characters!</div>
              </div>
              <div className='form-group mb-3'>
              <label htmlFor='kategori'>Product Category</label>
                  <select
                      name='kategori'
                      id="kategori"
                      placeholder="kategori.."
                      value={dataProduk.kategori}
                      onClick={() => setKategoriBoolean(true)}
                      onChange={handleChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          kategoriBoolean && dataProduk.kategori === "Select" ? "border-red-500" : ""
                      }`}
                  >
                      <option value="Select">Select category...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
                  <div className="text-red-500" style={{ display: kategoriBoolean && dataProduk.kategori === "Select" ? "block" : "none" }}>Choose Category</div>
              </div>
              <div className='form-group mb-4'>
              <label htmlFor="gambar">Product Image</label>
              <input
                  type="file"
                  className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                  name='gambar'
                  id="gambar"
                  onChange={(e) => setGambar(URL.createObjectURL(e.target.files[0]))}
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
                        onClick={handleChange}
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
                        onClick={handleChange}
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
                        onClick={handleChange}
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
                      name='deskripsi'
                      rows="5"
                      placeholder="Product description..."
                      value={dataProduk.deskripsi}
                      onClick={() => setDeskripsiBoolean(true)}
                      onChange={handleChange}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          deskripsiBoolean && dataProduk.deskripsi === "" ? "border-red-500"  : ""
                      }`}
                  ></textarea>
                  <div className="text-red-500" style={{ display: deskripsiBoolean === true ? (dataProduk.deskripsi === "" ? "block" : "none") : "none" }}>Add Description</div>
              </div>
              <div className='form-group mb-3'>
                  <label htmlFor='harga'>Product Price</label>
                  <input 
                      id='harga'
                      name='harga'
                      type='number'
                      placeholder="Product price..."
                      value={dataProduk.harga}
                      onClick={() => setHargaBoolean(true)}
                      onChange={handleChange}
                      onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          hargaBoolean && dataProduk.harga === "" ? "border-red-500" :  ""
                      }`}
                      
                  />
                  <div className="text-red-500" style={{ display: hargaBoolean === true ? (dataProduk.harga=== "" ? "block" : "none") : "none" }}>Add Price</div>
              </div>
              <div className='flex items-center gap-5'>
                  <button type="submit" className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300">Submit</button>
              </div>
            </form>
          </section>
          <div className="container mt-5">
          <table id="data-table" className="w-full border-collapse rounded border-2">
            <thead>
            <tr>
                <th className='border-2 px-2'>No</th>
                <th className='border-2 px-2'>Name</th>
                <th className='border-2 px-2'>Category</th>
                <th className='border-2 px-2'>Quality</th>
                <th className='border-2 px-2'>Description</th>
                <th className='border-2 px-2'>Price</th>
                <th className='border-2 px-2'>Image</th>
                <th className='border-2 px-2'>Detail</th>
                <th className='border-2 px-2'>Action</th>
            </tr>
            </thead>
            <tbody id="table-body">
                { data && data.map((product, index) => (
                    <tr key={index}>
                      <td className='border-2 px-2 py-2 text-center'>{index + 1}</td>
                      <td className='border-2 px-2 py-2'>{product.nama}</td>
                      <td className='border-2 px-2 py-2'>{product.kategori}</td>
                      <td className='border-2 px-2 py-2'>{product.kualitas}</td>
                      <td className='border-2 px-2 py-2'>{product.deskripsi}</td>
                      <td className='border-2 px-2 py-2 text-center'>{product.harga}</td>
                      <td className='border-2 px-2 py-2'>
                      <img src={product.gambar} alt="Product Image" style={{ width: "100px", height: "auto" }} />
                      </td>
                      <td className='border-2 px-2 py-2'>
                        <button
                        className="mx-auto my-2 bg-amber-500 block text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
                        onClick={() => navigate(`/product/${product?.id}`, {
                          state: {
                            produkId: product.id,
                            produkNama: product.nama,
                            produkKategori: product.kategori,
                            produkKualitas: product.kualitas,
                            produkDeskripsi: product.deskripsi,
                            produkHarga: product.harga,
                          }
                        })}
                        >
                          Update
                        </button>
                      </td>
                      <td className='border-2 px-2 py-2'>
                      <button
                        className="mx-auto my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        data-toggle="modal"
                        data-target="#confirmationModal" 
                        onClick={() => handleShowDeleteModal(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50" id="confirmationModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content bg-white shadow-lg rounded-lg">
                <div className="modal-header bg-gray-200 border-b p-4 rounded-t-lg flex justify-between">
                  <h5 className="modal-title">Confirmation</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCloseDeleteModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body p-4">
                  Are you sure you want to delete this product?
                </div>
                <div className="modal-footer bg-gray-200 border-t p-4 rounded-b-lg flex justify-around">
                  <button
                    type="button"
                    className="my-2 bg-green-500 block text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                    onClick={handleCloseDeleteModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    onClick={() => handleDelete(productToDeleteIndex)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        </main>
    </>
  )
}

export default Product