import React, { Component } from 'react'

export default class Nav2 extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className='nav'>
        <div className='nav-item left'>
          { leftSlot }
        </div>
        <div className='nav-item center'>
          { centerSlot }
        </div>
        <div className='nav-item right'>
          { rightSlot }
        </div>
      </div>
    )
  }
}
