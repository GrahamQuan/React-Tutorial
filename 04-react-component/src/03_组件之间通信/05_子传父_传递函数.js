import React, { Component } from 'react'

class Btn extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { btnClick } = this.props

    return (
      <div>
        <button onClick={ btnClick }>+1</button>
      </div>
    )
  }
}

export default class App extends Component {

  // fn(){}
  // let aaa = fn
  // aaa()

  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <div>{'counter: '+counter}</div>
        <button onClick={ () => this.add() }>+</button>
        <Btn btnClick={ () => this.add() }/>
      </div>
    )
  }

  add(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
