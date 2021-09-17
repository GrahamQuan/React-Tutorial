import React, { Component } from 'react'
import Tab from './Tab'

export default class App extends Component {
  constructor(props){
    super(props)
    // 以后不会改变的数据
    this.productArr = ['热门', '新款', '流行']

    // 以后会发生改变的数据
    this.state = {
      currentIndex: 0,
      currentTitle: this.productArr[0]
    }

  }

  render() {
    const { currentIndex, currentTitle } = this.state

    return (
      <div>
        {/* 父传子，子传父 */}
        <Tab arr={ this.productArr } divClick={ index => this.divClick(index) }/>
        <h2> { currentTitle } </h2>
      </div>
    )
  }

  divClick(index){
    this.setState({
      currentIndex: index,
      currentTitle: this.productArr[index]
    })
  }
  
}
