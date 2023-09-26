import React, {useState} from 'react'
import Navbar from './components/Navbar'
import City from '../public/city.png'

const App = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    const alertMessage = `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };
  
  return (
    <>
      <Navbar/>
      {/* Main */}
      <section className='h-screen bg-cover bg-[#192e3a]' style={{ backgroundImage: `url(${City})` }}>
        <div className='container mx-auto'>
          <main className='text-center p-5'>
            <h1 className='mt-20 text-white text-4xl font-bold'>Apapun yang anda cari</h1>
            <h1 className='mt-2 text-white text-4xl font-bold'>Sun Server</h1>
            <p className='mt-5 px-10 text-slate-500 font-normal'>
              Kami menyediakan layanan yang strategis untuk menyediakan teknologi
              yang tepat. Kami juga akan membantu mengembangkan proses operasional
              terbaik untuk startup anda.
            </p>
              <a href="#" className='bg-[#64bcf4] w-16 px-14 py-1 mt-4 hover:bg-white hover:text-black flex justify-center mx-auto rounded-full text-white font-normal hover:text-black'>JOIN</a>
          </main>
        </div>
      </section>

      {/* Tentang kami */}
      <section className='text-center bg-[#231F20]'>
        <h1 className='text-white'>Tentang Kami</h1>
        <h2 className='mt-3 text-[#64bcf4] mt-1'>Sistem Keamanan Terbaik</h2>
        <div className='mt-1 text-white text-sm'>
          <li>Gratis sertifikat SSL untuk mengamankan data pelanggan.</li>
          <li>Pendeteksi Malware untuk mendeteksi dan menghapus file mencurigakan.</li>
          <li>Perlindungan privasi untuk menyembunyikan informasi pribadi Anda di WHOIS.</li>
          <li>Pemlokiran IP dan negara, untuk mencegah akses mencurigakan, lengkap dengan CDN Sun Server.</li>
        </div>
        <p className='mt-2 text-[#64bcf4]'>Mulai dengan Hosting Super Cepat</p>
        <p className='mt-2 text-[#64bcf4]'>Jadilah 1 dari 2,312 Pemilik Website</p>
      </section>

      {/* Kontak kami */}
      <section className='bg-[#231F20] pt-9'>
        <div className='text-center'>
          <h1 className='text-white'>Kontak Kami</h1>
        </div>
        <div className='container mx-auto flex justify-center pb-5'>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center mt-3'>
              <div className='form-group'>
                <label htmlFor="firstname" className='text-white'>First name : </label>
                <input id='firstName' value={formData.firstName} onChange={handleChange} name='firstName' type="text" placeholder="First name..." className='w-13 mr-3 rounded border-2 px-4 py-0 outline-none focus:border-blue-500' />
              </div>
              <div className='form-group'>
                <label htmlFor="lastname" className='text-white'>Last name : </label>
                <input id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} type="text" placeholder="Last name..." className='w-13 rounded border-2 px-4 py-0 outline-none focus:border-blue-500'/>
              </div>
            </div>
            <div className='form-group mt-4 flex justify-center'>
                <label htmlFor="email" className='text-white mr-1'>Email : </label>
                <input type="email" value={formData.email} onChange={handleChange} placeholder="Email.." id='email' name='email' className='w-3/4 rounded border-2 px-4 py-0 outline-none focus:border-blue-500'/>
            </div>
            <div className='form-group mt-3 justify-center text-center'>
                <label htmlFor="help" className='text-white'>What can we help you with?</label>
                <textarea
                      id="message"
                      name='message'
                      rows="5"
                      value={formData.message} onChange={handleChange}
                      placeholder="Type here..."
                      className='w-full rounded mt-1 border-2 px-4 py-2 outline-none focus:border-blue-500'
                ></textarea>
            </div>
            <div className='flex justify-center mt-3'>
              <button type='submit' className='cursor-pointer rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 transition duration-300'>Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#1A242F] flex flex-cols p-3 ">
        <div className="w-2/5 pl-3">
          <h4 className='text-[#64bcf4] text-lg'>SAITAMPOOL</h4>
          <p className='pr-3 text-white text-sm'>HTML, Javascript dan React adalah alat untuk membuat sebuah web</p>

          <div className="pr-3">
            <a
              href="https://web.facebook.com/dimashasim.mustofa?locale=id_ID"
              ><i className="bx bxl-facebook-circle text-white mr-1 hover:text-blue-500"></i
            ></a>
            <a href="https://www.instagram.com/dimashasim_/"
              ><i className="bx bxl-instagram-alt text-white mr-1 hover:text-blue-500"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/dimas-hasim-mustofa-607a77236"
              ><i className="bx bxl-linkedin-square text-white mr-1 hover:text-blue-500"></i
            ></a>
          </div>
        </div>

        <div className='text-white pr-3 pl-4'>
          <h4 className='text-[#64bcf4] text-lg'>Menu</h4>
          <li className='list-none'><a className='text-white text-sm' href="#">Home</a></li>
          <li className='list-none'><a className='text-white text-sm' href="#">About</a></li>
          <li className='list-none'><a className='text-white text-sm' href="#">Service</a></li>
          <li className='list-none'><a className='text-white text-sm' href="#">Contact Us</a></li>
        </div>

        <div className="text-white pl-16">
          <h4 className='text-[#64bcf4] text-lg'>Project</h4>
          <li className='list-none'><a className='text-white text-sm' href="#">Design Graphic</a></li>
          <li className='list-none'><a className='text-white text-sm' href="#">Web development</a></li>
          <li className='list-none'><a className='text-white text-sm' href="#">UI/UX</a></li>
        </div>

        <div className="text-white pl-16">
          <h4 className='text-[#64bcf4] text-lg'>Contact</h4>
          <li className='list-none '>
            <a className='text-white text-sm' href="#"><i className="bx bxs-map"></i> Semarang</a>
          </li>
          <li className='list-none'>
            <a className='text-white text-sm' href="#"><i className="bx bxs-phone"></i> 089-234-563-049</a>
          </li>
        </div>
      </section>
    </>
  )
}

export default App