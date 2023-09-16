import React, { Component } from 'react'
import Navbar from './components/Navbar'
import logo from './assets/logo.svg'
import {article} from './datas/article.json'
import { useState } from 'react'

function CreateProduct () {
    const [nama, setNama] = useState("");
    const [namaBoolean, setNamaBoolean] = useState(false);
    const [kategori, setKategori] = useState("Select");
    const [kategoriBoolean, setKategoriBoolean] = useState(false);
    const [kualitas, setKualitas] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [deskripsiBoolean, setDeskripsiBoolean] = useState(false);
    const [randomNumber, setRandomNumber] = useState("");
    const [randomNumberBoolean, setRandomNumberBoolean] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nama.length >= 6 && kategori !== "Select" && deskripsi !== "" && randomNumber !== "") {
          const message = `Product Name: ${nama}\nProduct Category: ${kategori}\nProduct Quality: ${kualitas}\nDescription: ${deskripsi}\nProduct Price: ${randomNumber}`;
          alert(message);
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
    
    return (
        <>
            <Navbar/>
            <div className='container'>
            <img className="mt-4 mx-auto d-block" src={logo} alt="logo" />
            <h1 className="text-center mt-4">{article.title.en}</h1>
            <p className='text-center'>{article.description.en}</p>

            <div className='row justify-content-center mt-5'>
                <div className="col-7 bg-light">
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
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
                            className={`form-control ${
                                namaBoolean === true ? (nama.length < 6 || nama.length > 25 ? "border border-danger" : "border border-primary") : ""
                            }`}
                        />
                        <div className="invalid-feedback" style={{ display: namaBoolean === true ? (nama.length < 6 ? "block" : "none") : "none" }}>Product Name minimum 6 characters!</div>
                        <div className="invalid-feedback" style={{  display: nama.length > 25 ? "block" : "none" }}>Product Name maximum 25 characters!</div>
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
                            className={`form-control ${
                                kategoriBoolean === true ? (kategori === "Select" ? "border border-danger" : "border border-primary") : ""
                            }`}
                        >
                            <option value="Select">Select category...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <div className="invalid-feedback" style={{ display: kategoriBoolean === true ? (kategori === "Select" ? "block" : "none") : "none" }}>Choose Category</div>
                    </div>
                    <div className='form-group mb-4'>
                    <label htmlFor="gambar">Product Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        name='gambar'
                        id="gambar"
                        required
                    />
                    </div>
                    <label htmlFor="kualitas">Quality</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
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
                            className="form-check-input"
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
                            className="form-check-input"
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
                    <div className='form-group mt-4'>
                        <label htmlFor="deskripsi">Product Description</label>
                        <textarea
                            id="deskripsi"
                            rows="5"
                            placeholder="Product description..."
                            value={deskripsi}
                            onClick={() => setDeskripsiBoolean(true)}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className={`form-control ${
                                deskripsiBoolean === true ? (deskripsi === "" ? "border border-danger" : "border border-primary") : ""
                            }`}
                        ></textarea>
                        <div className="invalid-feedback" style={{ display: deskripsiBoolean === true ? (deskripsi === "" ? "block" : "none") : "none" }}>Add Description</div>
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
                            className={`form-control ${
                                randomNumberBoolean=== true ? (randomNumber === "" ? "border border-danger" : "border border-primary") : ""
                            }`}
                            
                        />
                        <div className="invalid-feedback" style={{ display: randomNumberBoolean === true ? (randomNumber === "" ? "block" : "none") : "none" }}>Add Price</div>
                    </div>
                    <div className='mb-4'>
                        <button type="button" className="btn btn-success px-3" onClick={generateRandomNumber}>Generate</button>
                    </div>
                    <div className='mb-4 text-center'>
                        <button type="submit" className="btn btn-primary px-5">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default CreateProduct