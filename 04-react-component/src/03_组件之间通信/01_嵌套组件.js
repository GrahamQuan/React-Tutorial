import React, { Component } from 'react'

class Header extends Component {
  render(){
    return (
      <h2>Header</h2>
    )
  }
}

function Banner() {
  return (
    <div>Banner...</div>
  )
}
function ProductList() {
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
    return (
      <h2>Footer</h2>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
