import React, { Component } from 'react'

class Header extends Component {
  render(){
    console.log('Header render');
    return (
      <h2>Header</h2>
    )
  }
}

class Footer extends Component {
  render(){
    console.log('Footer render');

    return (
      <h2>Footer</h2>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      message: 'hello world'
    }
  }

  render() {
    console.log('App render');

    return (
      <div>
        <h3>shouldComponentUpdate</h3>
        <h3>{ 'counter: ' + this.state.counter }</h3>
        <button onClick={e => this.add()}>+1</button>
        <h3>{ this.state.message }</h3>
        <button onClick={e => this.changeText()}>change text</button>
        <Header />
        <Footer />
      </div>
    )
  }

  add() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText(){
    this.setState({
      message: '你好 世界'
    })
  }
  
  // 阻止render
  shouldComponentUpdate(nextProps, nextState){
    if ( this.state.counter !==  nextState.counter ) {
      return true
    }
    return false

  }

}
