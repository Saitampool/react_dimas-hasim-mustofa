import { Component } from 'react'

class Input extends Component {
  render() {

    const {id, name, label, type, placeholder} = this.props
    
    return (
      <div className='form-group mb-3'>
        <label htmlFor={id}>{label}</label>
        <input 
            id={id}
            name={name}
            type={type}
            className="form-control"
            placeholder={placeholder}
         />
      </div>
    )
  }
}

export default Input