import React from 'react'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/')
}
  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-2">
        <a className="text-black font-bold" href="#">
          Dimasss
        </a>
        <div className="flex">
          <a className="rounded-md mr-1 px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white" href='' onClick={handleClick}>
            Home
          </a>
          <a className="rounded-md mr-1 px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white" href="#">
            Features
          </a>
          <a className="rounded-md mr-1 px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white" href="#">
            Pricing
          </a>
          <a className="rounded-md mr-1 px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white" href=" " 
            onClick={() => {
              navigate('/chat')
            }}>
            FAQS
          </a>
          <a className="rounded-md px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white" href="#">
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar