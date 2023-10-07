/* eslint-disable no-unused-vars */
import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2"

import Navbar from '../components/Navbar';

function UpdateProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location?.state?.produkId;
    const [nama, setNama] = useState(location?.state?.produkNama);
    const [kategori, setKategori] = useState(location?.state?.produkKategori);
    const [kualitas, setKualitas] = useState(location?.state?.produkKualitas);
    const [deskripsi, setDeskripsi] = useState(location?.state?.produkDeskripsi);
    const [harga, setHarga] = useState(location?.state?.produkHarga);   



    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updateData = {
                nama,
                kategori,
                kualitas,
                deskripsi,
                harga: parseFloat(harga)
            };
            const response = await axios.put(
                `https://651eb45144a3a8aa4768d77a.mockapi.io/products/${id}`,
                updateData
            );
        
            if (response.status === 200) {
                Swal.fire({
                    icon:'success',
                    title: 'Berhasil mengubah data',
                    confirmButtonText: "OK"
                })
                console.log('Data berhasil diupdate:', response.data);
                navigate('/product');
            }
        } catch (error) {
            Swal.fire({
                icon:'error',
                title: 'Gagal mengubah data',
                text: `Pesan kesalahan : ${error}`,
                confirmButtonText: "OK"
            })
        }
    };

    return (
    <>
        <Navbar/>
        <main className='container-xl bg-blue-300 mx-auto px-4 md:px-16 lg:px-32'>
            <h2 className="mb-4 text-2xl font-semibold pt-3">Update Product</h2>
            <button
                onClick={() => navigate(-1)}
                className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300"
                >
                Back
            </button>
            <section>
                <form onSubmit={handleUpdate} className='space-y-4 mt-4'>
                    <div className='form-group mb-3'>
                        <label htmlFor="nama">Product Name</label>
                        <input 
                            id="nama"
                            name="nama"
                            type="text"
                            maxLength="50"
                            onChange={(e) => setNama(e.target.value)}
                            value={nama}
                            className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="kategori">Product Category</label>
                        <input 
                            id="kategori"
                            name="kategori"
                            type="text"
                            minLength="6"
                            maxLength="50"
                            onChange={(e) => setKategori(e.target.value)}
                            value={kategori}
                            className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="kualitas">Product Quality</label>
                        <input 
                            id="kualitas"
                            name="kualitas"
                            type="text"
                            minLength="6"
                            maxLength="50"
                            onChange={(e) => setKualitas(e.target.value)}
                            value={kualitas}
                            className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="nama">Product Description</label>
                        <textarea
                            id="deskripsi"
                            name='deskripsi'
                            rows="5"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="harga">Product Price</label>
                        <input 
                            id="harga"
                            name="harga"
                            type="number"
                            onChange={(e) => setHarga(e.target.value)}
                            value={harga}
                            className="w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='flex items-center gap-5'>
                        <button 
                            type="submit" 
                            className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition duration-300"
                            >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </main>
    </>
    )
}

export default UpdateProduct