import React, { Component } from 'react'


class Cpn extends Component{
  render(){
    return (
      <div> { 'cpn Component' } </div>
    )
  }

  componentWillUnmount(){
    console.log(' Cpn componentWillUnmount ');
  }
}

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      message: 'hello react',
      counter: 0,
      isShow: true
    }
    console.log(' App constructor ');
  }

  render() {
    console.log(' App render()');

    const { message, counter, isShow } = this.state

    return (

      <div>
        <h2>App组件</h2>
        <p>{message}</p>
        <button onClick={ e => this.add() }>+</button>
        <h3> { counter } </h3>
        <hr/>
        <button onClick={ e => { this.change() } }>change</button>
        { isShow && <Cpn /> }
      </div>
    )
  }

  add(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  change(){
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount(){
    console.log(' App componentDidMount ');
  }

  componentDidUpdate(){
    console.log(' App  componentDidUpdate ');
  }

}
