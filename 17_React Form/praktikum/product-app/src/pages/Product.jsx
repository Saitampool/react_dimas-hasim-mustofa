import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar';
import {article} from '../datas/article.json'

const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [nama, setNama] = useState("");
    const [namaBoolean, setNamaBoolean] = useState(false);
    const [kategori, setKategori] = useState("Select");
    const [kategoriBoolean, setKategoriBoolean] = useState(false);
    const [kualitas, setKualitas] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [deskripsiBoolean, setDeskripsiBoolean] = useState(false);
    const [randomNumber, setRandomNumber] = useState("");
    const [randomNumberBoolean, setRandomNumberBoolean] = useState(false);
    const [gambar, setGambar] = useState("");
    const [dataProduk, setDataProduk] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDeleteIndex, setProductToDeleteIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nama.length >= 6 && kategori !== "Select" && deskripsi !== "" && randomNumber !== "") {
            const newProduct = {
                nama,
                kategori,
                kualitas,
                deskripsi,
                randomNumber,
                gambar
              };
              setDataProduk([...dataProduk, newProduct]);

              setNama("");
              setKategori("Select");
              setKualitas("");
              setDeskripsi("");
              setRandomNumber("");
        } else {
          setNamaBoolean(true);
          setKategoriBoolean(true);
          setDeskripsi(true);
          setRandomNumberBoolean(true);
        }
      };
    
      const generateRandomNumber = () => {
        const random = Math.floor(Math.random() * 1000);
        setRandomNumber(random);
        console.log("Random Number:", random);
      };

    const handleShowDeleteModal = (index) => {
        setProductToDeleteIndex(index);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setProductToDeleteIndex(null);
    };

    const handleDelete = (index) => {
      const updatedDataProduk = [...dataProduk];
      updatedDataProduk.splice(index, 1);
      setDataProduk(updatedDataProduk);
      setShowDeleteModal(false);
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
                      value={nama}
                      onClick={() => setNamaBoolean(true)}
                      onChange={(e) => setNama(e.target.value)}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          namaBoolean && (nama.length < 6 || nama.length > 25) ? "border-red-500" : ""
                      }`}
                  />
                  <div className="text-red-500" style={{ display: namaBoolean === true ? (nama.length < 6 ? "block" : "none") : "none" }}>Product Name minimum 6 characters!</div>
                  <div className="text-red-500" style={{  display: nama.length > 25 ? "block" : "none" }}>Product Name maximum 25 characters!</div>
              </div>
              <div className='form-group mb-3'>
              <label htmlFor='kategori'>Product Category</label>
                  <select
                      name='kategori'
                      id="kategori"
                      placeholder="kategori.."
                      value={kategori}
                      onClick={() => setKategoriBoolean(true)}
                      onChange={(e) => setKategori(e.target.value)}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          kategoriBoolean && kategori === "Select" ? "border-red-500" : ""
                      }`}
                  >
                      <option value="Select">Select category...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
                  <div className="text-red-500" style={{ display: kategoriBoolean && kategori === "Select" ? "block" : "none" }}>Choose Category</div>
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
                        onClick={(e) => setKualitas(e.target.value)}
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
                        onClick={(e) => setKualitas(e.target.value)}
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
                        onClick={(e) => setKualitas(e.target.value)}
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
                      placeholder="Product description..."
                      value={deskripsi}
                      onClick={() => setDeskripsiBoolean(true)}
                      onChange={(e) => setDeskripsi(e.target.value)}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          deskripsiBoolean && deskripsi === "" ? "border-red-500"  : ""
                      }`}
                  ></textarea>
                  <div className="text-red-500" style={{ display: deskripsiBoolean === true ? (deskripsi === "" ? "block" : "none") : "none" }}>Add Description</div>
              </div>
              <div className='form-group mb-3'>
                  <label htmlFor='harga'>Product Price</label>
                  <input 
                      id='harga'
                      name='harga'
                      type='number'
                      placeholder="Product price..."
                      value={randomNumber}
                      onClick={() => setRandomNumberBoolean(true)}
                      onChange={(e) => setRandomNumber(e.target.value)}
                      onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                      className={`w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500 ${
                          randomNumberBoolean && randomNumber === "" ? "border-red-500" :  ""
                      }`}
                      
                  />
                  <div className="text-red-500" style={{ display: randomNumberBoolean === true ? (randomNumber === "" ? "block" : "none") : "none" }}>Add Price</div>
              </div>
              <div className='flex items-center gap-5'>
                  <button type="button" className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300" onClick={generateRandomNumber}>Generate</button>
                  <button type="submit" className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300">Submit</button>
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
                {dataProduk.map((product, index) => (
                    <tr key={index}>
                      <td className='border-2 px-2 py-2'>{index + 1}</td>
                      <td className='border-2 px-2 py-2'>{product.nama}</td>
                      <td className='border-2 px-2 py-2'>{product.kategori}</td>
                      <td className='border-2 px-2 py-2'>{product.kualitas}</td>
                      <td className='border-2 px-2 py-2'>{product.deskripsi}</td>
                      <td className='border-2 px-2 py-2'>{product.randomNumber}</td>
                      <td className='border-2 px-2 py-2'>
                      <img src={gambar} alt="Product Image" style={{ width: "100px", height: "auto" }} />
                      </td>
                      <td className='border-2 px-2 py-2'>
                        <button
                        className="mx-auto my-2 bg-amber-500 block text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
                        onClick={() => navigate(`/product/${index}`, {
                          state: {
                            productId: index,
                            productNama: product.nama,
                            productKategori: product.kategori,
                            productKualitas: product.kualitas,
                            productDeskripsi: product.deskripsi,
                            productRandomNumber: product.randomNumber,
                            productGambar: product.gambar,
                          }
                        })}
                        >
                          Detail
                        </button>
                      </td>
                      <td className='border-2 px-2 py-2'>
                      <button
                        className="mx-auto my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        data-toggle="modal"
                        data-target="#confirmationModal" 
                        onClick={() => handleShowDeleteModal(index)}
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