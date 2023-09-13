import { Component } from 'react'
import RadioItem from './RadioItem'

class Radio extends Component {
  render() {
    return (
      <>
        <label htmlFor="kualitas">Kualitas</label>
        <RadioItem id={'kualitas1'} name={'kualitas'} value={'Brand New'} label={'Brand New'}/>
        <RadioItem id={'kualitas2'} name={'kualitas'} value={'Second Hand'} label={'Second Hand'}/>
        <RadioItem id={'kualitas3'} name={'kualitas'} value={'Refufbished'} label={'Refufbished'}/>
      </>
    )
  }
}

export default Radio
