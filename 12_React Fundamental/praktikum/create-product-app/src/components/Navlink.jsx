import { Component } from 'react'

class Navlink extends Component {
  render() {
    const {label} = this.props
    
    return (
      <>
        <li className='nav-item'>
            <a className='nav-link rounded-sm mr-1' href="#">{label}</a>
        </li>
      </>
    )
  }
}

export default Navlink