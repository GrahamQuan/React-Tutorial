import React, { Component } from 'react'

export default class Nav1 extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <div className='nav'>
        <div className='nav-item left'>
          { children[0] }
        </div>
        <div className='nav-item center'>
          { children[1] }
        </div>
        <div className='nav-item right'>
          { children[2] }
        </div>
      </div>
    )
  }
}
