import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="bg-[#192e3a] w-screen text-white py-3 px-4 flex justify-between items-center fixed sticky top-0 left-0 right-0 z-10">
            <a href="#" className="navbar-logo text-white font-bold ml-4">Logo</a>

            <div className="space-x-10 mr-8 py-1">
                <a href="#home" className="text-[#64bcf4] hover:text-white font-normal">Home</a>
                <a href="#features" className="text-[#64bcf4] hover:text-white font-normal">Domain</a>
                <a href="#features" className="text-[#64bcf4] hover:text-white font-normal">Hosting</a>
                <a href="#features" className="text-[#64bcf4] hover:text-white font-normal">Server</a>
                <a href="#about" className="text-[#64bcf4] hover:text-white font-normal">Tentang Kami</a>
                <a href="#faqs" className="text-[#64bcf4] hover:text-white font-normal">Kontak</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar