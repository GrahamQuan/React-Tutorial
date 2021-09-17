import React, { Component } from 'react'

class Header extends Component {
  render(){
    console.log('Header render');
    return (
      <h2>Header</h2>
    )
  }
}

function Banner() {
  console.log('Banner render');

  return (
    <div>Banner...</div>
  )
}
function ProductList() {
  console.log('ProductList render');

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}


class Main extends Component {
  render(){
    console.log('Main render');
    
    return (
      <div>
        <Banner/>
        <ProductList />
      </div>
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
      counter: 0
    }
  }

  render() {
    console.log('App render');

    return (
      <div>
        <h3>{ 'counter: ' + this.state.counter }</h3>
        <button onClick={e => this.add()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  add() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
