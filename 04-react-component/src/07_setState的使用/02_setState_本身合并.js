import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        counter: { this.state.counter }
        <br/>
        <button onClick={e => this.changeObj()}>obj: +3</button>
        <button onClick={e => this.changeFunc()}>func: +3</button>
      </div>
    )
  }

  // setState 参数是obj，会合并
  changeObj(){
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // setState 参数是func，会累加
  changeFunc(){
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

}
