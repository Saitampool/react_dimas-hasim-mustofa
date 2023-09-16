import React, { Component } from 'react'
import Navlink from './Navlink'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
        <a href="#" className='navbar-brand text-black font-weight-bold'>
            Simple Header
        </a>

        <ul className='navbar-nav ml-auto mr-3'>
            <Navlink label={"Home"}/>
            <Navlink label={"Features"}/>
            <Navlink label={"Pricing"}/>
            <Navlink label={"FAQs"}/>
            <Navlink label={"About"}/>
        </ul>
      </nav>
    )
  }
}

export default Navbar