import React, { Component } from 'react'

 class RadioItem extends Component {
  render() {
    const {id, name, value, label} = this.props
    
    return (
      <div className='form-check'>
        <input type="radio" id={id} name={name} value={value} required/>
        <label className='form-check-label ml-1' htmlFor={id}>{label}</label>
      </div>
    )
  }
}

export default RadioItem