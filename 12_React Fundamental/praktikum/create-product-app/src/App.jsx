import './App.css'
import Navbar from './components/Navbar'
import logo from './assets/logo.svg'
import Input from './components/Input'
import Radio from './components/Radio'

function App() {

  return (
    <>
    <Navbar/>
    <div className='container'>
    <img className="mt-4 mx-auto d-block" src={logo} alt="logo" />
      <h1 className="text-center mt-4">Create Product</h1>
      <p className='text-center'>Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.</p>

      <div className='row justify-content-center mt-5'>
        <div className="col-7 bg-light">
          <form className="needs-validation" noValidate>
            <Input id={'produk'} name={'produk'} type={'text'} placeholder={'nama produk...'} label={'Nama Produk'}/>
            <div className='form-group mb-3'>
            <label htmlFor='kategori'>Kategori Produk</label>
              <select
                className="form-control"
                id="kategori"
                aria-placeholder="kategori.."
                required
              >
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='form-group mb-4'>
            <label htmlFor="gambar">Gambar Produk</label>
              <input
                type="file"
                className="form-control-file"
                id="gambar"
                required
              />
            </div>
            <Radio/>
            <div className='form-group mt-4'>
            <label htmlFor="deskripsi">Deskripsi Produk</label>
              <textarea
                className="form-control"
                id="deskripsi"
                rows="5"
                placeholder="deskripsi produk.."
                required
              ></textarea>
            </div>
            <Input id={'harga'} name={'harga'} type={'number'} placeholder={'harga produk...'} label={'Harga Produk'}/>
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

export default App
